// Inverted Mirror Right Angle

// * * * * * * * * * * 
//   * * * * * * * * * 
//     * * * * * * * * 
//       * * * * * * * 
//         * * * * * * 
//           * * * * * 
//             * * * * 
//               * * * 
//                 * * 
//                   * 


function pattern(no) {

  let output = '';

  for (let i = no; i > 0; i--) {
    for (let j = no; j > i; j--) {
      output += "  "
    }
    for (let k = 1; k <= i; k++) {
      output += "* "
    }

    output += "\n"
  }

  console.log(output)
}


pattern(10);


// Time Complexity - O(n²).
