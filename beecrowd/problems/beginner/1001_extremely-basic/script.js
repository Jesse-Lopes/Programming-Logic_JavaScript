const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const values = [];

const calculateValues = () => {
  for (let i = 0; i <= samples.length; i++) {
    values[i] = parseInt(samples.shift());
  }

  return values[0] + values[1];
}

const result = calculateValues(values);

console.log(`X = ${result}`);
