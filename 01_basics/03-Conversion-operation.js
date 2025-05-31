let score = "33e";
// console.log(typeof score);
let num = Number(score);
// console.log(typeof num);
let x = "";
let y = Boolean(x);
// console.log(y);
let um = 43;
let hmm = String(um);
// console.log(typeof hmm);
/*************************** Operations ***********************/
let value = 5;
let neg = -value;

// console.log(neg);
function arith () {
  console.log(2 + 2); // 4
  console.log(4 - 1); // 3
  console.log(2 * 3); // 6
  console.log(2 ** 3); // 8 // ** means power operation
  console.log(45 / 5); // 9 quotient
  console.log(5 % 4); // 1 reminder
}

// arith();
// let str1 = "hi";
// let str2 = " Rahul";
// console.log(str1 + str2);
// console.log((3 + 4) * 5 % 3);
function concatenate () {
  console.log("1" + 2); // 12
  console.log(1 + "2"); // 12
  console.log("1" + 2 + 2); // 122
  console.log(1 + 2 + "2"); // 32
}

// concatenate();
console.log(+true);// 1
console.log(+"");// 0
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
// console.log(num3);
let gamecounter = 100;
gamecounter++;
console.log(gamecounter);
