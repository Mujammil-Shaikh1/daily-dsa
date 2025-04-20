// Print Multiplication table 


// function fun(no) {
//   for (let i = 1; i <= 10; i++) {
//     console.log("Multiplication table", i * no)
//   }
// }

function fun(no) {

  let i = 1;

  while (i <= 10) {
    console.log(`${no} * ${i} -> ${no * i} `)
    i++;
  }

}


let Input = 10
fun(Input)