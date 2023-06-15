//function that clears all values on calculator
const btn = document.querySelectorAll("button");

function clearScreen() {
  document.getElementById("result").value = " ";
}

//function that displays values
function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

btn.addEventListener("click");
//here is an event listener to check when btn is clicked

//need to display value when btn is clicked to "result"
