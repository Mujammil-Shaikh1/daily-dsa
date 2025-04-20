
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * 
// * * * * * * * 
// * * * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


function pattern(num) {
  let output = '';

  for (let row = 1; row < 2 * num; row++) {
    let totalCols = row <= num ? row : 2 * num - row;

    for (let col = 1; col <= totalCols; col++) {
      output += '* ';
    }

    output += '\n';
  }

  console.log(output);
}


pattern(10)

// Time Complexity: O(n²)