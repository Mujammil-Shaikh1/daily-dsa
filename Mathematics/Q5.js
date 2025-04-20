// number = 12345
// output = 5


function countDigits(number) {

  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);

    count++
  }

  return count

}

const Input = 12345

document.body.innerHTML = `
            <h1>Input : ${Input}</h1>
            <h1>Output : ${countDigits(Input)}</h1>
            `


// console.log("countdigits", countDigits(Input))


// Time Complexity - O(log₁₀(n))  