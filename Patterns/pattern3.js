// Square pattern 

// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 



function pattern(num) {
  let output = '';
  for (let row = 1; row <= num; row++) {

    for (let col = 1; col <= num; col++) {
      output += "* "
    }
    output += "\n"
  }

  console.log(output)
}

pattern(10);


// Time Complexity - O(n²).