//          * 
//         * * 
//        * * * 
//       * * * * 
//      * * * * * 
//     * * * * * * 
//    * * * * * * * 
//   * * * * * * * * 
//  * * * * * * * * * 
// * * * * * * * * * * 
//  * * * * * * * * * 
//   * * * * * * * * 
//    * * * * * * * 
//     * * * * * * 
//      * * * * * 
//       * * * * 
//        * * * 
//         * * 
//          * 



function pattern(num) {

  let output = '';

  for (let i = 1; i <= num * 2; i++) {
    if (i <= num) {
      for (let j = 1; j <= num - i; j++) {
        output += " "
      }

      for (let k = 1; k <= i; k++) {
        output += '* '
      }
    }
    else {
      for (let j = num; j >= (2 * num) - i + 1; j--) {
        output += " "
      }
      for (let k = 1; k < (2 * num) - i + 1; k++) {
        output += "* "
      }
    }

    output += "\n"
  }


  console.log(output);

}

pattern(10)


// Time Complexity: O(n²)