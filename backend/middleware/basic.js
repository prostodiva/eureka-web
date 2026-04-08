const express = require('express');

const basicMiddleware = [
    express.json({ limit: '50kb' }),
    express.urlencoded({ extended: true, limit: '50kb' })
];

module.exports = basicMiddleware;