
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8 
// 1 2 3 4 5 6 7 8 9 
// 1 2 3 4 5 6 7 8 9 10 


function pattern(num) {

  let output = '';
  for (let row = 1; row <= num; row++) {

    for (let col = 1; col <= row; col++) {
      output += col + ' '
    }

    output += '\n'
  }

  console.log(output);
}


pattern(10)

// Time Complexity: O(n²)