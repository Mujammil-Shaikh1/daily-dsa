// 4 4 4 4 4 4 4  
// 4 3 3 3 3 3 4   
// 4 3 2 2 2 3 4   
// 4 3 2 1 2 3 4   
// 4 3 2 2 2 3 4   
// 4 3 3 3 3 3 4   
// 4 4 4 4 4 4 4 



function pattern(n) {
  const size = 2 * n - 1;
  let output = '';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const min = Math.min(i, j, size - 1 - i, size - 1 - j);
      output += (n - min) + ' ';
    }
    output += '\n';
  }

  console.log(output);
}

pattern(4);


// Time Complexity: O(n²)