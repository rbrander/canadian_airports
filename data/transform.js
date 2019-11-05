// transform.js

const fs = require('fs');

console.log('Transform file');

const contents = fs.readFileSync('canadian_airports.txt', { encoding: 'utf8' });

const lines = contents.split('\n');

const LINE_REGEX = /\*\s*(?<icao_code>[A-Z0-9]{4})\s?\=?(\([A-Z]*\))?(\s?-?\s\[\[(?<airport_name>.*)\]\](\s\(.*\))? - (\[\[(.*\|)?(?<town>.*)\]\], )?\[\[(?<prov>.*)\]\])/;
const lineData = lines.map(line => LINE_REGEX.exec(line).groups);

const JSONLineData = JSON.stringify(lineData, undefined, 2);
fs.writeFileSync('canadian_airports.json', JSONLineData, { encoding: 'utf8' });
