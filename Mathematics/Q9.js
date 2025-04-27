


// This is the one way to find out the trailing zeroes


// Factorial of 5 is 120 so output will be 1
// Factorial of 10 is 3628800 so output iwll be 2

// function trailingZeros(num) {

//   let result = 1;
//   if (num === 0) {
//     return 1;
//   }

//   for (let i = 2; i <= num; i++) {
//     result = result * i;
//   }
//   console.log("result", result);
//   let count = 0;
//   while (result % 10 === 0) {
//     count++;
//     result = Math.floor(result / 10)
//   }

//   console.log(count);

//   return result
// }



//  Optimized solution


function trailingZeros(num) {

  let result = 1;
  if (num === 0) {
    return result;
  }

  for (let i = 1; i <= num; i = i * 5) {

    result = result + Math.floor(result / i)
    console.log(result)
  }
  return result

}


// Time complexity O(logn)

console.log(trailingZeros(5))