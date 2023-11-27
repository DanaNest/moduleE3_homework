function getSum(a){
  return function (b) {
    return a + b
  }
}

const sumFunc = getSum(87);
const result = sumFunc(23);
console.log(result);