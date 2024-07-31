const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const samples = input.split('\n');

const grades = [];

const gradeA_weigth = 2.0;
const gradeB_weigth = 3.0;
const gradeC_weight = 5.0;

const calculateWeights = (gradeA_weigth, gradeB_weigth, gradeC_weight) => {
  return gradeA_weigth + gradeB_weigth + gradeC_weight;
}

const calculateAverage = (grades) => {
  const weigthSum = calculateWeights(gradeA_weigth, gradeB_weigth, gradeC_weight);

  for (let i = 0; i <= samples.length; i++) {
    grades[i] = parseFloat(samples.shift());
    console.log(grades[i]);
  }

  return ((grades[0] * gradeA_weigth) + (grades[1] * gradeB_weigth) + (grades[2] * gradeC_weight)) / weigthSum;
}

const average = calculateAverage(grades);

console.log(`MEDIA = ${average.toFixed(1)}`);
