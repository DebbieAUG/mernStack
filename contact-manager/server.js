import cors from 'cors';
console.log("Hi! THis is the server file for the contact manager app.");
import express, { application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

//-----------------3
import connectDB from './config/dbConnection.js';
connectDB();

const app = express();
const port = process.env.port || 5001;

app.use(cors());
app.use(express.json()); 

import contactRoutes from './routes/contactRoutes.js';
app.use('/api/contacts', contactRoutes);

//-----------------2
import errorHandler from './middleware/errorHandler.js';
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
