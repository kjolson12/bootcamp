const express = require('express');
const app = express();
const port = 3000;

app.get('/cats', (req, res) => {
    res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});