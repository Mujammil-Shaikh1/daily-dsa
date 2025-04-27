// Write a program to find the factorial of a given no

// function factorial(num){
//   let factorial=1;
//   if(num===0){
//     return 1
//   }

//   for(let i =2;i<=num;i++){
//     factorial*=i;
//   }

//   return factorial
// }

// Recursive way
function factorial(num) {

  if (num == 0) {
    return 1;
  }

  return num * factorial(num - 1)
}

let Input = 5

console.log(`Factorial of ${Input}! is -> `, factorial(Input))



// Time complexity - O(n)