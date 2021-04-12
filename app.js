const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Parse JSON
app.use(express.json());

app.use('/api',require('./routes'));

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app