// Write a program to find the given no is pallindrome or not 

function isPallindrome(num) {
  let temp = num;
  let rev = 0;

  while (temp > 0) {
    let val = temp % 10;
    rev = rev * 10 + val;
    temp = Math.floor(temp / 10)
  }

  return rev === num
}

console.log(isPallindrome(313))

//  time complexity O(logn)