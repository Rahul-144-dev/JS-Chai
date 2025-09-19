let myArr = [1, 2, 3, 4, 5];
/**
 * @param {number[]} myArr
 */
function arrayMethods(myArr) {
  // Array Methods
  // myArr.push(12); // add element at rear
  // myArr.pop(); // remove element from rear
  // myArr.unshift(32); // add element at front
  // myArr.shift(); // remove element from front
  console.log(myArr.includes(2));
  console.log(myArr.indexOf(4));
  let newArr = myArr.join(); // bind and convert into string
  console.log(myArr);
  console.log(newArr);
}

// slice, splice
function slice_splice() {
  console.log("slice");
  slice(myArr);
  console.log("\n");
  console.log("splice");
  splice(myArr);
}
slice_splice();
// @ts-ignore
function slice(myArr = []) {
  console.log("a", myArr);
  let spArr = myArr.slice(1, 3);
  console.log('new',spArr);
  console.log("b", myArr);
}
// @ts-ignore
function splice(myArr = []) {
  console.log("a", myArr);
  let spArr = myArr.splice(1, 3);
  console.log('new',spArr);
  console.log("b", myArr);
}
