//    1
//   212
//  32123
// 4321234
//  32123
//   212
//    1




function pattern(num) {

  let output = '';

  for (let i = 1; i <= 2 * num; i++) {

    if (i < num) {
      for (let j = 1; j <= num - i; j++) {
        output += "  "
      }

      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k <= i) {
          output += i - k + 1 + " "
        }
        else {
          output += k - i + 1 + " "
        }
      }

    }
    else {

      console.log("i", i)
      for (let j = 1; j <= num - (2 * num - i); j++) {
        output += "  ";
      }

      for (let k = 1; k <= 2 * (2 * num - i) - 1; k++) {
        if (k <= 2 * num - i) {
          output += ((2 * num - i) - k + 1) + " ";
        } else {
          output += (k - (2 * num - i) + 1) + " ";
        }
      }
    }

    output += "\n"

  }

  console.log(output);
}


pattern(5)


// Time Complexity: O(n²)