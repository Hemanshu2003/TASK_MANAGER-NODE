const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandling = require('./middleware/error-handling');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);

app.use(errorHandling);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening to port : ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
