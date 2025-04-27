// find the sum of first n natural numbers.


function fun(no) {
  let sum = 0;
  for (let i = 0; i <= no; i++) {
    sum += i;
  }
  return sum;
}

const Input = 1000
console.log('Sum of n natural numbers', fun(Input))


// Time Complexity - O(N) 