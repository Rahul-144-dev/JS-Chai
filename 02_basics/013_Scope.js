// Global Scope
let glob = 15;
// let,const these are block scoped
// var is function scoped
{
  let a = 1;
  var b = 2;
  const c = 3;
  // console.log(`inner glob is ${glob}`);
}
b = 12;
// console.log(b);

function one() {
  const userName = "Rahul";
  function two() {
    const web = "Youtube";
    console.log(userName);
  }
  console.log(web);
  two();
}
one();
if (1) {
  const userName = "Surajit";
  if (userName) {
    const web = "IG";
    console.log(userName + web);
  }
  console.log(web);
}
console.log(userName);

//| Hoisting
console.log(addOne(9));
//@ts-ignore
function addOne(val) {
  return val + 1;
}

console.log(addTwo(8));
//@ts-ignore
const addTwo = function (val) {
  return val + 2;
};
