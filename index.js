const express = require('express');
const app = express();
const port = 3000;

const data = require('./data/canadian_airports.json');

console.log('Server starting...');
app.get('/airport/random', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Started on port ${port}`));


