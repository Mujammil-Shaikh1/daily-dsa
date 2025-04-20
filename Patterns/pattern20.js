//          * 
//         * * 
//        *   * 
//       *     * 
//      *       * 
//     *         * 
//    *           * 
//   *             * 
//  *               * 
// * * * * * * * * * * 

function pattern(num) {
  let output = '';


  for (let i = 1; i <= num; i++) {

    for (let j = 1; j <= num - i; j++) {
      output += " "
    }

    if (i === 1) {
      output += "* "
    } else if (i === num) {
      for (let row = 1; row <= num; row++) {
        output += "* "
      }
    }
    else {
      output += "* "
      for (let k = 1; k < 2 * i - 3; k++) {
        output += " "
      }
      output += "* "
    }
    output += "\n"
  }

  console.log(output);
}

pattern(10);


// Time Complexity: O(n²)