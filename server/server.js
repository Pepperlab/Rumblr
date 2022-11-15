const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express REST API routes
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => console.log(`Inside port ${PORT}`));