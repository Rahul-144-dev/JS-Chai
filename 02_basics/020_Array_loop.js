let for_of = () => {
  const myArr = [1, 2, 3, 4, 5];
  for (const val of myArr) {
    console.log(val);
  }
  const greetings = `Good Morning`;
  for (const greet of greetings) {
    console.log(greet);
  }
};
// for_of();
// map -> sequential order,store unique values only - in key,value pair
let maps = () => {
  const mappa = new Map();
  mappa.set("en", "english");
  mappa.set("bn", "bengali");
  mappa.set("hn", "hindi");
  mappa.set("bn", "bengali");
  console.log(mappa);

  // destructuring key & value
  for (const [key, val] of mappa) {
    console.log(key, val);
  }
  // map isn't works with for_in
  // for (const val in mappa) {
  //   console.log(val);
  // }
};
// maps();
let obj_loop_in = () => {
  let myObj = {
    name: "Rahul",
    age: 19,
    city: "kolkata",
    state: "West Bengal",
  };
  for (const val in myObj) {
    console.log(`${val} : ${myObj[val]}`);
  }
};

// obj_loop_in();

let of_in_loop = () => {
  let Larr = [1, 2, 3, 4, 5];
  for (const val of Larr) {
    console.log(val); // Access Values
  }
  for (let key in Larr) {
    console.log(Larr[key]); // Access Keys then Values
  }
};

const for_each = () => {
  let code_arr = ["JS", "TS", "Java", "Python"];
  code_arr.forEach(function (item) {
    // console.log(item);
  });
  // syntax_difference
  // code_arr.forEach((val) => console.log(val));
  //| reCheck it -> how it works-detail note
  function print(val) {
    console.log(val);
  }
  // code_arr.forEach(print);
  code_arr.forEach((val, idx, arr) =>
    console.log(`value -> ${val}, index -> ${idx}, arr -> ${arr}`)
  );
};

for_each();

const array_obj_use = () => {
  const _codi = [
    {
      langName: "JavaScript",
      fileName: "js",
    },
    {
      langName: "Java",
      fileName: "java",
    },
    {
      langName: "Python",
      fileName: "py",
    },
  ];

  _codi.forEach((val) => {
    console.log(val.fileName, "-", val.langName);
  });
};
// array_obj_use();

let download_time_calc = (speed, size) => {
  let second_to_time = (total_seconds) => {
    let hour = Math.floor(total_seconds / 3600);
    let mintues = Math.floor(total_seconds % 3600) / 60;
    let seconds = total_seconds % 60;
    let ans = `${hour.toFixed()} Hour ${mintues.toFixed()} mintues ${seconds.toFixed()} seconds`;
    console.log(ans);
  };
  let time_calc = (size) => {
    let speed_net = speed / 8;
    let mb = size * 1024;
    let seconds = mb / speed_net;
    second_to_time(seconds);
  };
  time_calc(size);
};
// download_time_calc(420, 100);
