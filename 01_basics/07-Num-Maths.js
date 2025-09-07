function numbers() {
  const score = 40;
  console.log(score);
  const balance = new Number(score);
  console.log(balance);
  console.log(balance.toString());

  const float = 7135.321;
  console.log(float.toPrecision(4));
  console.log(Number(float.toFixed(2)));

  const hundreds = 1000000;
  console.log(hundreds.toLocaleString("en-IN"));

  console.table([
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_VALUE,
    Number.MIN_VALUE,
  ]);
}

function maths() {
  console.log(Math);

  console.log(Math.abs(-32)); // Absolute Value
  console.log(Math.round(43.3)); // Round of Value
  console.log(Math.round(43.7)); // Round of Value
  console.log(Math.ceil(2.2)); // up the value
  console.log(Math.floor(5.8)); // down the value
  console.log(Math.sqrt(25)); // Square Root of Number
  console.log(Math.pow(3, 3)); // Power
  console.log(3 ** 2); // Power

  console.log(Math.min(1, 2, 3, 4, 5)); // minimum Value among all
  console.log(Math.max(1, 2, 3, 4, 5)); // maximum Value among all

  console.log(Math.random()); // random number between (0-1) decimal numbers
  console.log(Math.trunc(Math.random() * 10 + 1)); // 1-10
}

function randomNumberRange(min, max) {
  min = 10;
  max = 20;
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumberRange(20, 25));
console.log(Math);