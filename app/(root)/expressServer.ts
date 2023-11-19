// expressServer.ts
import express from 'express';
import bodyParser from 'body-parser';
import { POST } from '@/app/api/uploadthing/route'; // Update the path accordingly
import { createUploadthingExpressHandler } from 'uploadthing/express';
import ourFileRouter from '../api/uploadthing/core';

const app = express();

// Use JSON body parser
app.use(bodyParser.json());

// Define your webhook route
app.post('/webhook', async (req, res) => {
  // Call the corresponding function from your Next.js API route
  await POST({ json: () => req.body });
  res.status(200).json({ success: true });
});

// Mount the ourFileRouter with a specific path
app.use('/api/uploadthing', createUploadthingExpressHandler({ router: ourFileRouter }));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});

export default app;
