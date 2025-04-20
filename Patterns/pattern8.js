//                  .* 
//                 * * * 
//               * * * * * 
//             * * * * * * * 
//           * * * * * * * * * 
//         * * * * * * * * * * * 
//       * * * * * * * * * * * * * 
//     * * * * * * * * * * * * * * * 
//   * * * * * * * * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * * * 

function pattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
      output += "  "
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      output += "* "
    }

    output += "\n"
  }
  console.log(output);
}

pattern(10)