// document.querySelector(".box").onclick = function () {
//   alert("Owl Click");
// };
function eventObject() {
  document.querySelectorAll(".box")?.forEach(function (val) {
    val.addEventListener("click", function (e) {
      // alert(e.target.id);
      console.log(e);
      /* Event Object */
      // type, timeStamp, preventDefault, target, toElement, srcElement, currentTarget,
      // clientX, clientY, screenX, screenY
      // altKey, ctrlKey, keyCode,
    });
  });
}
function eventBubbling() {
  // inside to outside ( bottom to top )
  document.querySelector(".wrapper")?.addEventListener(
    "click",
    function (e) {
      console.log("Wrapper clicked");
    },
    false
  );
  document.querySelector("#box2")?.addEventListener(
    "click",
    (e) => {
      console.log("box2 clicked");
      e.stopPropagation();
    },
    false
  );
}
function eventCapturing() {
  //  outside to inside ( top to bottom )
  document.querySelector(".wrapper")?.addEventListener(
    "click",
    function (e) {
      console.log("Wrapper clicked");
    },
    true
  );
  document.querySelector("#box2")?.addEventListener(
    "click",
    (e) => {
      console.log("box2 clicked");
    },
    true
  );
}
// eventBubbling(); // it's Default
// eventCapturing();
document.querySelector(".google")?.addEventListener("click", (e) => {
  e.preventDefault(); // stop link to open webpage
  e.stopPropagation(); // stop event bubling and capturing
  console.log("google clicked");
});

document.querySelector(".wrapper")?.addEventListener("click", (e) => {
  const target = e.target;
  if (target.className === 'box') {
    console.log(`${target.id} removed`);
    target.remove();
  }
  else if (target.id)
    console.log(target.id);
  else
    console.log(target.className);

});


