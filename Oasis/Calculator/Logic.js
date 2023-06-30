function appendToResult(value) {
  var result = document.getElementById("result");
  result.value += value;
}

function calculate() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}

function clearResult() {
  var result = document.getElementById("result");
  result.value = "";
}

function deleteLast() {
  var result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}
