const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// File Imports
const { authRouter } = require('./api/index');

// * Setup Configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());

// * Connect to MongoDB
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-pjusq.mongodb.net/<${process.env.MONGO_DB_NAME}>?retryWrites=true&w=majority`
);

// * Routes:
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = 3232;
app.listen(port, () => console.log(`Listening on port: ${port}`));
