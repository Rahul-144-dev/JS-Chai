// '<'-> less than
// '>'-> greater than
// '<=' -> less than equals
// '>=' -> greater than equals
// '==' -> checks both side values
// '!=' -> check both side Not equals
// '===' -> check both side value+type
// '!==' -> check both side Not equals+type
// '!!' -> Converts any value to a pure Boolean
// '+' -> Converts a value into a number
let operators = () => {
  if (5 < 10) console.log(true);
  if (12 < 5) console.log(false);
  if (9 > 7) console.log(true);
  if (4 > 20) console.log(false);
  if (7 <= 7) console.log(true);
  if (11 <= 4) console.log(false);
  if (15 >= 10) console.log(true);
  if (1 >= 7) console.log(false);
  if (3 == "3") console.log(true);
  if (5 == 5) console.log(true);
  if (4 != "6") console.log(true);
  if (8 != 8) console.log(false);
  if (4 === "4") console.log(false);
  if (7 === 7) console.log(true);
  if (6 !== "6") console.log(true);
  if (9 !== 9) console.log(false);
};
let else_if = () => {
  let temp = 50;
  if (temp <= 30) console.log("Normal");
  else if (temp <= 40) console.log("moderate");
  else if (temp >= 42) console.log("deadly");
};
let scope = () => {
  const score = 200;
  if (score > 100) {
    const power = "fly";
    console.log(`power is ${power}`);
  }
};
let shorthand = () => {
  // Bad code syntax
  const balance = 1000;
  if (balance > 500)
    console.log("more than 500"), console.log("greater than 500");
};
let nested_ladder = () => {
  let age = "f";
  if (age < 18) console.log("minnor");
  else if (age >= 18) console.log("adult");
  else console.log("enter a valid number");
};
let and_or = () => {
  const usserLoggedIn = true;
  const debitCard = true;
  const googleLogin = true;
  const emailLogin = false;
  if (usserLoggedIn && debitCard) console.log("give access");
  if (googleLogin || emailLogin) console.log("loggedIn");
};
let switch_case = () => {
  const day = true;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case "Tuesday":
      console.log("Tuesday");
      break;
    case true:
      console.log("Wednesday");
      break;
    default:
      console.log("Nothing to show cause all invalid");
      break;
  }
};
// Truthy Values -> "0","false"," ",[],{}, function(){}
// Falsy Values -> false,0,BigInt,""(Blank String),null,undefined,NaN
let truthy_falsy = () => {
  const userEmail = "rahul144hz@gmail.com";
  if (userEmail) console.log("got user email");
  else console.log("don't have user email");

  let myArr = [];
  let myObj = {};
  if (myArr.length <= 0) console.log("empty Array");
  if (Object.keys(myObj).length === 0)
    console.log("object.key() returns a Array");
};
// ?? -> only for null,undefined
let Nullish_Coalescing_Operator = () => {
  let val1 = 5 ?? 10;
  let val2 = null ?? 20 ?? 30;
  let val3 = undefined ?? null;
  let val4 = null ?? undefined;
  console.log(val1);
  console.log(val2);
  console.log(val3);
  console.log(val4);
};
let terniary_Operator = () => {
  // (condition) ? true : false
  let age = 19;
  age == 18
    ? console.log("adult")
    : age < 18
    ? console.log("minor")
    : console.log("more than 18");
};

let just_fun = () => {
  // if (age == 18) console.log("adult");
  // else if (age <= 20) console.log("19");
  // if (21 < !20) console.log(true);
  // else console.log(false);
  // console.log(!!20);
};
