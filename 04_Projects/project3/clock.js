const clock = document.querySelector(".clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

clock.addEventListener("click", (e) => {
  let math = parseInt(Math.random() * 100 + 1);
  console.log(math);
});
