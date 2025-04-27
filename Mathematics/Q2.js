// Check if a no is positive negative or zero

function fun(number) {

  if (number === 0) {
    return `Given number ${number} is zero`
  }
  else if (number < 0) {
    return `Given number ${number} is negative number`
  }
  else {
    return `Given number ${number} is positive number `
  }
}
console.log(fun(10))

// Time Complexity - O(1)