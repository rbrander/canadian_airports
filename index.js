const express = require('express');
const app = express();
const port = 3000;

const data = require('./data/canadian_airports.json');


// display help
const helpMsg = `
<!DOCTYPE html>
<html>
<head>
<title>Canadian Airport API</title>
<style>body { font-family: Arial; }</style>
</head>
<body>
<div><strong>/airport/random</strong> - get a single random airport</div>
<div><strong>/airport/all</strong> - get all airports</div>
<div><strong>/airport/:icao_code</strong> - get a specific airport</div>
</body></html>
`;
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(helpMsg)
});
// get a single random airport
app.get('/airport/random', (req, res) => res.send(data[~~(Math.random() * data.length)]));
// get all airports
app.get('/airport/all', (req, res) => res.send(data));
// get a specific airport
app.get('/airport/:icao_code', (req, res) =>
  res.send(data.find(item => item.icao_code == req.params.icao_code))
);

app.listen(port, () => console.log(`Server started on port ${port}`));
