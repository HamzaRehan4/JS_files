//reduce function
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not change the original array.
//we can also pass starter value. for instance we want to calculate the sum of elements of an array and then add 20 in it,
//we can pass 20 as a starter value
const sum_Array = [1, 2, 3, 4]; //..sum is 10 now we want to add 20
const sum_ele = sum_Array.reduce((acc, curr) => acc + curr, 20);
console.log(sum_ele);

let arr = [1, 100, 5, 8, 40];
const avg = arr.reduce((acc, curr, last, array) => {
  debugger;
  let total = acc + curr;
  if (last === array.length - 1) {
    return total / arr.length;
  }
  return total;
});
console.log(avg);

const product = arr.reduce((acc, curr) => acc * curr);
console.log(product);
