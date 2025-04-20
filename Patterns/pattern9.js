// * * * * * * * * * * * * * * * * * 
//   * * * * * * * * * * * * * * * 
//     * * * * * * * * * * * * * 
//       * * * * * * * * * * * 
//         * * * * * * * * * 
//           * * * * * * * 
//             * * * * * 
//               * * * 
//                 * 


function pattern(num) {

  let output = '';

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      output += "  "
    }

    for (let k = 0; k < 2 * (num - i) - 1; k++) {
      output += "* "
    }

    output += '\n'
  }
  console.log(output)

}

pattern(10)

// Time Complexity: O(n²)