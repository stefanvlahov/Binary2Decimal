let binaryInput = document.querySelector('binary');
let entryForm = document.querySelector('form_submission');

entryForm.noValidate = true;
// entryForm.addEventListener("submit", handler,false);

binaryInput.addEventListener('input', () => {
  binaryInput.setCustomValidity('');
  binaryInput.checkValidity();
});

binaryInput.addEventListener('invalid', () => {
  if(binaryInput.value === '') {
    binaryInput.setCustomValidity('Enter a binary number!');
  } else {
    binaryInput.setCustomValidity('Binary numbers can only contain 0s and 1s');
  }
});
// function handler(ev) {
//   displayInput();
// }
//
// function displayInput() {
//   document.getElementById("decimal_result").innerHTML = document.getElementById("binary").value;
// }
