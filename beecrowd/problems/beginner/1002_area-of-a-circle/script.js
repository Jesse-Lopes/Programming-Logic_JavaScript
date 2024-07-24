const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const sample = input.split('\n');

const radius = parseFloat(sample.shift());
const pi = 3.14159;

const calculateCircumferenceOfArea = (radius, pi) => {
  return pi * Math.pow(radius, 2);
}

const result = calculateCircumferenceOfArea(radius, pi);

console.log(`A=${result.toFixed(4)}`);
