document.getElementById("submitButton").addEventListener("click", checkInput, false);

function convertToDecimal(inputText) {
  let base = 1; // 2^0
  let decimal = 0; // the decimal result
  let len = inputText.length; // length of input
  for (let i = len - 1; i >= 0; i--) { // len = 6
    if (inputText[i] === '1') decimal += base;
    base = base * 2;
  }
  return decimal;
}

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
    displayText = convertToDecimal(inputValue);
  }
  document.getElementById('decimal_result').innerHTML = displayText;
}
