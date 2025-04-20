// * * * * * * * * * * * * * * * * * * * 
//   * * * * * * * * * * * * * * * * * 
//     * * * * * * * * * * * * * * * 
//       * * * * * * * * * * * * * 
//         * * * * * * * * * * * 
//           * * * * * * * * * 
//             * * * * * * * 
//               * * * * * 
//                 * * * 
//                   * 
//                   * 
//                 * * * 
//               * * * * * 
//             * * * * * * * 
//           * * * * * * * * * 
//         * * * * * * * * * * * 
//       * * * * * * * * * * * * * 
//     * * * * * * * * * * * * * * * 
//   * * * * * * * * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * * * 



function pattern(num) {

  let output = '';

  for (let i = 0; i < num * 2; i++) {

    if (i < num) {
      for (let j = num; j > num - i; j--) {
        output += "  "
      }

      for (let k = 1; k <= 2 * (num - i) - 1; k++) {
        output += "* "
      }
    }
    else {
      for (let j = i; j <= 2 * num - 2; j++) {
        output += "  "
      }
      for (let k = 1; k <= 2 * (i - num) + 1; k++) {
        output += "* "
      }
    }
    output += "\n"
  }

  console.log(output);

}


pattern(10)

// Time Complexity: O(n²)