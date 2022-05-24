document.getElementById("submitButton").addEventListener("click", checkBinary, false);

function checkBinary() {
  let inputValue = document.getElementById('binary').value;
  let textPattern = /\b[01]+\b/;
  let displayText;
  if (inputValue === "" || inputValue.length > 8 || textPattern.test(inputValue) === false) {
    displayText = "Input not valid";
  } else {
    let binaryValue = parseInt(inputValue);
  }
  document.getElementById('decimal_result').innerHTML = displayText;
}
