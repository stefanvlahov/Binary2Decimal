let binaryInput = document.getElementById("binary");
let entryForm = document.getElementById("form_submission");

entryForm.addEventListener("submit", false);

binaryInput.addEventListener("", handler, false);

function handler(ev) {
  displayInput();
}

function displayInput() {
  document.getElementById("decimal_result").innerHTML = document.getElementById("binary").value;
}
