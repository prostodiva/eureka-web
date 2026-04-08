const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const isProd = process.env.NODE_ENV === 'production';

    res.status(500).json(
        isProd
            ? { error: 'Internal server error' }
            : { error: 'Internal server error', message: err.message }
    );
};

module.exports = errorHandler;