const express = require('express');
const app = express();
const PORT = 3000;

const mw = (req, res, next) => {
    return next;
}

app.use(mw);

app.get('/', (req, res) => {
    res.status(201)
    .send('Listen');
});

app.get('/status', (req, res) => {
    res.status(200)
    .send({Status: 200});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});