// E D C B A
// D C B A
// C B A
// B A
// A


function pattern(num) {

  let output = '';

  for (let i = 1; i <= num; i++) {
    for (let j = num - i; j >= 0; j--) {
      output += String.fromCharCode(65 + j) + " "

    }

    output += "\n"
  }
  console.log(output)
}

pattern(5)


// Time Complexity: O(n²)