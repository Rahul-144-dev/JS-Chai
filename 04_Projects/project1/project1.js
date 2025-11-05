const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const body = document.body;

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e);
    let color = e.target.id;
    switch (color) {
      case "orange":
        colorChange(color);
        break;
      case "blue":
        colorChange(color);
        break;
      case "yellow":
        colorChange(color);
        break;
      case "green":
        colorChange(color);
        break;

      default:
        break;
    }
  });
});

body.addEventListener("dblclick", (e) => {
  colorChange("white");
});
function colorChange(value) {
  body.style.backgroundColor = value;
}
