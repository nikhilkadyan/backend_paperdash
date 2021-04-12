const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const errorController = require('./controllers/errorController');

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Parse JSON
app.use(express.json());

app.use('/api',require('./routes'));
app.use(errorController);

module.exports = app