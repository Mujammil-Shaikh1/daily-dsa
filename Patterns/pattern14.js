// 1 1 1 1 1 1 1 1 1 1 1 
// 2 2 2 2 2 2 2 2 2 2 
// 3 3 3 3 3 3 3 3 3 
// 4 4 4 4 4 4 4 4 
// 5 5 5 5 5 5 5 
// 6 6 6 6 6 6 
// 7 7 7 7 7 
// 8 8 8 8 
// 9 9 9 
// 10 10 
// 11 



function pattern(num) {

  let output = '';

  for (let i = 0; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      output += i + 1 + " "
    }

    output += "\n"
  }

  console.log(output)
}

pattern(10)


// Time Complexity: O(n²)