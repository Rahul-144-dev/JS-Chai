//@ts-nocheck
function addTwoNumbers(a, b) {
  console.log(a + b);
}

// addTwoNumbers(21, 33);
function loginUserMsg(username = "user_default") {
  if (!username) {
    console.log(`the value is undefined`);
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMsg('Rahul'));
function calculateCartPrice(...num) {
  let sum = null;
  num.forEach((value) => (sum += value));
  return sum;
}

// console.log(calculateCartPrice(200, 400, 500, 600, 1000));

let obj = {
  username: "Rahul",
  a1ge: 19,
};
function handleObject(any_object) {
  console.log(
    `username is ${any_object?.username} and age is ${any_object?.age}`
  );
}
handleObject(obj);

let ary = [200, 300, 500, 700];
function returnSecondValue(array = []) {
  return array[2]
}
console.log(returnSecondValue(ary));
