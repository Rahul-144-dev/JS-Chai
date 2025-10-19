// @ts-nocheck
const user = {
  userName: "Rahul",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.userName} Welcome to our Website`);
    console.log(this);
  },
};

// user.welcomeMsg();
// user.userName = "Sam";
// user.welcomeMsg();
// user["welcomeMsg"]();

// console.log(this); // {} -> blank object cause of Node environment with V8 enginge

// function chai() {
//   let name = "hello";
//   console.log(this.name);
//   console.log(this);
// }

//| Arrow Fucntion
// const chai = () => {
//   console.log(this); // arrow this {} blank object
// };

// chai();

// @ts-ignore
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 5));
// Implicit Return
const addThree = (val1, val2, val3) => val1 + val2 + val3;
// No return require when implicitly return in one line
console.log(addThree(1, 2, 3));

const myArr = [1, 2, 3, 4, 5];
myArr.forEach((val) => {
  console.log(val);
});