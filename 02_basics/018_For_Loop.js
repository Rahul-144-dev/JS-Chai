// for loop
let single_loop = () => {
  for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
  }
};
let nested_for_loop = () => {
  let n = 10;
  for (let i = 1; i <= n; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= n; j++) {
      // console.log(`Inner Loop ${j} and Outer ${i}`);
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
let array_loop = () => {
  let myArr = ["superman", "flash", "batman"];
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
  }
};

let break_continue = () => {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      console.log("5 skipped");
      continue;
    }
    if (i > 8) break;
    console.log(i);
  }
};
break_continue();
