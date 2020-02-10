const express = require('express');
const app = express();
const helmet = require('helmet');
const asoiafDeaths = require('./asoiaf-deaths');
const PORT = 3000;

app.use(helmet());

app.get('/', (req, res) => {
    res.status(201)
    .send('Listen');
});

app.get('/asoiaf-deaths', (req, res) => {
    res.status(200)
    .send(asoiafDeaths());
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});