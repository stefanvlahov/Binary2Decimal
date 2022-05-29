document.getElementById("submitButton").addEventListener("click", checkInput, false);

function checkInput() {
  let inputValue = document.getElementById('binary').value;
  let textPattern = /\b[01]+\b/;
  let displayText = "";
  if (inputValue === "") {
    displayText = "Value cannot be blank";
  } else if (inputValue.length > 8) {
    displayText = "Value cannot be greater than 8 integers";
  } else if (textPattern.test(inputValue) === false) {
    displayText = "Value must be a binary number";
  } else {
    displayText = parseInt(inputValue, 2);
  }
  document.getElementById('decimal_result').innerHTML = displayText;
}
