// uploadthing.ts

import express, { Request, Response, NextFunction } from 'express';
import { currentUser } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from 'uploadthing/express';
import app from '@/app/(root)/expressServer'; // Import the common Express app instance

const f = createUploadthing();

const getUser = async () => await currentUser();

const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  media: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    //@ts-ignore
    .middleware(async (req , res , next) => {
      // This code runs on your server before upload
      const user = await getUser();

      // If you throw, the user will not be able to upload
      if (!user) return res.status(401).json({ error: 'Unauthorized' });

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      (req as any).metadata = { userId: user.id };
      next();
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.url);
    }),
} satisfies FileRouter;

// Mount the ourFileRouter onto the common Express app instance
app.use('/our-file', (ourFileRouter.media as any).routes.middleware as express.RequestHandler);

export type OurFileRouter = typeof ourFileRouter;

export default ourFileRouter;
