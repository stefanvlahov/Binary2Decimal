let binaryInput = document.getElementById("binary");
let entryForm = document.getElementById("form_submission");

entryForm.addEventListener("submit", function (f) {
  f.preventDefault();
  displayInput();
});

function displayInput() {
  document.getElementById("decimal_result").innerHTML = document.getElementById("binary").value;
}
