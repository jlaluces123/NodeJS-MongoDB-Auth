const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// File Imports
const { authRouter } = require('./api/index');

// * Setup Configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());

// * Connect to MongoDB

// * Routes:
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = 3232;
app.listen(port, () => console.log(`Listening on port: ${port}`));
