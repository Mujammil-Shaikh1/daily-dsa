// Print no from 1 to 10



function printNoOneToTen(no) {
  let output = ``;
  let i = 1

  while (i <= no) {
    output += `<h1>Mumber ${i}</h1>`
    i++
  }

  return output
}


document.body.innerHTML = printNoOneToTen(10)

// Time Complexity - O(1)