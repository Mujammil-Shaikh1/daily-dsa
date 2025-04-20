// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1



function pattern(num) {

  let output = '';

  for (let row = 1; row <= num; row++) {
    let val = row % 2 == 0 ? 0 : 1
    for (let col = 1; col <= row; col++) {
      output += Number(val) + " "
      val = 1 - val
    }

    output += "\n"
  }


  console.log(output)
}


pattern(5)


// Time Complexity: O(n²)