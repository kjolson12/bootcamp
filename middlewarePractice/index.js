const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/dog', (req, res) => {
    res.send('WOOF!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});