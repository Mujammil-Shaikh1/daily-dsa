// *                                     * 
// * *                                 * * 
// * * *                             * * * 
// * * * *                         * * * * 
// * * * * *                     * * * * * 
// * * * * * *                 * * * * * * 
// * * * * * * *             * * * * * * * 
// * * * * * * * *         * * * * * * * * 
// * * * * * * * * *     * * * * * * * * * 
// * * * * * * * * * * * * * * * * * * * * 
// * * * * * * * * *     * * * * * * * * * 
// * * * * * * * *         * * * * * * * * 
// * * * * * * *             * * * * * * * 
// * * * * * *                 * * * * * * 
// * * * * *                     * * * * * 
// * * * *                         * * * * 
// * * *                             * * * 
// * *                                 * * 
// *                                     * 
function pattern(n) {
  let output = '';

  for (let i = 1; i <= 2 * n; i++) {
    const stars = i <= n ? i : 2 * n - i;
    const spaces = i <= n ? (2 * (n - i)) : (2 * (i - n));
    for (let j = 1; j <= stars; j++) {
      output += '* ';
    }
    for (let j = 1; j <= spaces; j++) {
      output += '  ';
    }

    for (let j = 1; j <= stars; j++) {
      output += '* ';
    }

    output += '\n';
  }

  console.log(output);
}

pattern(10);

// Time Complexity: O(n²)