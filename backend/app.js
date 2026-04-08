const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const basicMiddleware = require('./middleware/basic');
const errorHandler = require('./middleware/errorHandler');
const contact = require('./api/contact');


const app = express();

app.set('trust proxy', 1);

app.use(
    helmet({
        // If you later add a CSP, you may want to manage it at Cloudflare.
        contentSecurityPolicy: false
    })
);

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean)
    : ['http://localhost:5173', 'http://localhost:3001'];

const corsOptions = {
    origin: function (origin, callback) {
        // Non-browser clients (or same-origin) may not send Origin. Allow in dev, deny in prod.
        if (!origin) {
            return callback(
                process.env.NODE_ENV === 'production'
                    ? new Error('CORS origin missing')
                    : null,
                process.env.NODE_ENV !== 'production'
            );
        }

        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('CORS origin not allowed'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
    maxAge: 86400
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(...basicMiddleware);

//Routes
app.use('/api/contact', contact);

//test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.use(errorHandler);

module.exports = app;