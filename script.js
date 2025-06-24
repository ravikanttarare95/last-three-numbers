let arrayNumbers = [];
const inputNumber = document.getElementById("input-number");
const output = document.querySelector(".output-numbers");

function addNumber() {
  arrayNumbers.unshift(inputNumber.value);
  if (arrayNumbers.length >= 3) {
    arrayNumbers.splice(3, 1);
  }
  localStorage.setItem("Numbers", JSON.stringify(arrayNumbers));
  renderNumber();
}

arrayNumbers = JSON.parse(localStorage.getItem("Numbers")) || [];
function renderNumber() {
  arrayNumbers.forEach(() => {
    output.innerHTML = `${arrayNumbers}`;
  });
}
renderNumber();
