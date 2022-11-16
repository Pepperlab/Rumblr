const path = require('path');
const express = require('express');
const globalRouter = require('./router/globalRouter');
const searchRouter = require('./router/searchRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express REST API routes
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/test', async (req, res) => {
    return res.statusCode(200).json({ message: 'pass!' })
});

app.use('/api/global', globalRouter);
app.use('/api/search', searchRouter);

// handle unknwon routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express error handle caught unknown middleware error',
        status: 500,
        message: { err: 'an error has occured' }
    };
    const errorObj = Object.assign({}, defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`Inside port ${PORT}`));

module.exports = { app };