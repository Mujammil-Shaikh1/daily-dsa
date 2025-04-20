

// Print Even no from One to n





// function evenNoFronOneToN(no) {

//   let output = ``;

//   for (let i = 1; i <= no; i++) {
//     if (i % 2 === 0) {
//       output += `<p>Even no -> ${i}</p>`
//     }
//   }
//   return output
// }



function evenNoFronOneToN(no) {
  let output = ``;
  let i = 1;

  while (i <= no) {

    if (i % 2 === 0) {
      output += `<p>Even no -> ${i}</p>`
    }
    i++
  }

  return outputj
}

const Input = 100

document.body.innerHTML = evenNoFronOneToN(Input)



// Time Complexity - O(N)