// Write a program to find the GCD (Greatest Common divisor) of HCF (Highest Common Factor) 


// Naive Algorithm

// function GCD(a, b) {

//   let min = Math.min(a, b);

//   let temp
//   for (let i = 1; i <= min; i++) {
//     if (a % i === 0 && b % i === 0) {
//       temp = i
//     }
//   }
//   return temp
// }



// console.log(GCD(8, 12))


// Euclidean  Algorithm


function GCD(a, b) {

  console.log("a--->",a)
  console.log("b--->",b)
  if (b === 0) {
    return a
  }

  return GCD(b, a % b)
}

console.log(GCD(4, 12))
