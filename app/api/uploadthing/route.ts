// Import necessary modules and functions
import express, { Request, Response } from 'express';
import ourFileRouter from './core';


// Create an Express Router instance
const router = express.Router();

// Your GET handler
router.get('/', async (req: Request, res: Response) => {
  // Custom logic for your GET handler

  // Use functionality from ourFileRouter
  const { metadata } = (req as any);
  if (metadata) {
    res.send(`GET handler - User ID: ${metadata.userId}`);
  } else {
    res.send('GET handler');
  }
});

// Your POST handler
router.post('/', async (req: Request, res: Response) => {
  const payload = req.body;
  // Replace with your logic

  // Use functionality from ourFileRouter
  const { metadata } = (req as any);
  if (metadata) {
    res.send(`POST handler - User ID: ${metadata.userId}`);
  } else {
    res.send('POST handler');
  }
});

// Mount your ourFileRouter onto the router
router.use('/our-file', (ourFileRouter.media as any).routes.middleware as express.RequestHandler);

// Export the router and POST handler
export const POST = async (options: { json: () => any }) => {
  // Add your logic here
  console.log('POST function called with options:', options);
};
export default router;
