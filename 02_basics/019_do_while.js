let while_loop = () => {
  let myArr = ["superman", "flash", "batman"];
  let stIdx = 0;
  while (stIdx < myArr.length) {
    console.log(myArr[stIdx]);
    stIdx++;
  }
};
let do_while_loop = () => {
// first time no condition checking
  let sp = 13;
  do {
    console.log(sp);
    sp++;
  } while (sp <= 12);
};
do_while_loop();
