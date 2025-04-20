// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
// 16 17 18 19 20 21 
// 22 23 24 25 26 27 28 
// 29 30 31 32 33 34 35 36 
// 37 38 39 40 41 42 43 44 45 
// 46 47 48 49 50 51 52 53 54 55 


function pattern(num) {

  let output = ''
  let count = 1;
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      output += count + " "
      count++
    }
    output += "\n"
  }

  console.log(output);

}


pattern(10)


// Time Complexity: O(n²)