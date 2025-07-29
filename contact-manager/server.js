console.log("Hi! THis is the server file for the contact manager app.");
import express, { application } from 'express';
import dotenv from 'dotenv';

const app = express();
const port = process.env.port || 5000;
dotenv.config();
 
app.use(express.json()); 

import contactRoutes from './routes/contactRoutes.js';
app.use('/api/contacts', contactRoutes);

//6
import errorHandler from './middleware/errorHandler.js';
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
