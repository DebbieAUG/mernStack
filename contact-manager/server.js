//1
console.log("Hi! THis is the server file for the contact manager app.");
import express, { application } from 'express';

//2
import dotenv from 'dotenv';

//1
const app = express();

//2
const port = process.env.port || 5000;
dotenv.config();

//3 middleware
app.get('/api/contacts', (req, res) => {
  res.status(200).json({message: 'Hello from the Contact Manager API!'});
});

//5 
app.use(express.json()); // Middleware to parse JSON bodies
//4 REPLACE 3 middleware
import contactRoutes from './routes/contactRoutes.js';
app.use('/api/contacts', contactRoutes);

//6
import errorHandler from './middleware/errorHandler.js';
app.use(errorHandler);


//2
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
