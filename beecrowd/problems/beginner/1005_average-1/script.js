const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const grades = [];

const gradeWeights = {
  gradeA_weight: 3.5,
  gradeB_weight: 7.5
}

const gradeA_weight = gradeWeights.gradeA_weight;
const gradeB_weight = gradeWeights.gradeB_weight;

const calculateWeights = (gradeA_weight, gradeB_weight) => {
  return gradeA_weight + gradeB_weight;
}

const calculateAverage = (grades) => {
  const sumWeights = calculateWeights(gradeA_weight, gradeB_weight);

  for (let i = 0; samples.length; i++) {
    grades[i] = parseFloat(samples.shift());
  }

  return ((grades[0] * gradeA_weight) + (grades[1] * gradeB_weight)) / sumWeights;
}

const average = calculateAverage(grades);

console.log(`MEDIA = ${average.toFixed(5)}`);
