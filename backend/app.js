const express = require('express');
const cors = require('cors');
const basicMiddleware = require('./middleware/basic');
const errorHandler = require('./middleware/errorHandler');
const contact = require('./api/contact');


const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:5173', 'http://localhost:3001'];

const corsOptions = {
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(null, false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};

app.use(cors(corsOptions));
app.options('/{*path}', cors(corsOptions));

app.use(...basicMiddleware);

//Routes
app.use('/api/contact', contact);

//test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.use(errorHandler);

module.exports = app;