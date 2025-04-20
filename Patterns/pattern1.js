//Left Triangle

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

function pattern(no) {

  let output = '';

  for (let row = 1; row <= no; row++) {

    for (let col = 1; col <= row; col++) {
      output += "* "
    }

    output += "\n"

  }
  console.log(output)
}
pattern(10);


// Time Complexity - O(n²).