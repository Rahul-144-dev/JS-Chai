const form = document.querySelector("form");
const Calculate = document.querySelector("#Calculate");
const Reset = document.querySelector("#Reset");
let heightVal;
let weightVal;
let result;
Calculate.addEventListener("click", (e) => {
  e.preventDefault();
  heightVal = document.querySelector("#Height").value;
  // document.querySelector("#Height").value = "";
  weightVal = document.querySelector("#Weight").value;
  result = bmiCalculate(heightVal, weightVal);
  document.querySelector(".result").textContent = result;
  resultCheck(result);
});

Reset.addEventListener("click", (ew) => {
  ew.preventDefault();
  console.log("clear");
  clearValues(heightVal, weightVal, result);
});

function clearValues(...val) {
  val.forEach((inp) => {
    if (inp.tagName == "INPUT") inp.value = "";
    else inp.textContent = "";
  });
}

function resultCheck(value) {
  if (isNaN(value)) return;
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.style.backgroundColor = "";
  });
  if (value < 18.6)
    listItems[0].style.backgroundColor = "#b02121c4"; // Under Weight
  else if (value >= 18.6 && value <= 24.9)
    listItems[1].style.backgroundColor = "#29b12edf"; // Normal Weight
  else listItems[2].style.backgroundColor = "#b0a621eb"; // Over Weight
}

function bmiCalculate(height, weight) {
  if (
    isNaN(height) ||
    isNaN(weight) ||
    height <= 0 ||
    weight <= 0 ||
    height === "" ||
    weight === ""
  )
    return `Please eneter valid Numbers!`;
  return (weight / (height / 100) ** 2).toFixed(1);
}
