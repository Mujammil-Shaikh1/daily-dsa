// E
// D E
// C D E
// B C D E
// A B C D E


function pattern(num) {

  let output = "";

  for (let i = 1; i <= num; i++) {

    for (let j = 1; j <= i; j++) {
      output += String.fromCharCode(65 + j + 4 - i) + " "
    }

    output += "\n"
  }
  console.log(output)
}

pattern(5)

// Time Complexity: O(n²)