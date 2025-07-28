console.log("Hi! THis is the server file for the contact manager app.");
import express from 'express';
import dotenv from 'dotenv';

const app = express();

const port = process.env.port || 5000;
dotenv.config();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
