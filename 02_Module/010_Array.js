let marvel_heros = ["thor", "Ironman", "spiderman"];
let dc_heros = ["superman", "flash", "batman"];
//| push
// marvel_heros.push(dc_heros); // it push as element with the whole array
// console.log(marvel_heros);
//| Concat
// let newArr = marvel_heros.concat(dc_heros); // Combines two Array and returns an new Array
// console.log(newArr);

//| Spread
// let all_heros=[...marvel_heros,...dc_heros]// Spread all values into signle values
// console.log(all_heros);

//| flat
// let fucked_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// let real_fuck = fucked_arr.flat(Infinity); // flat Array into depths
// console.log(real_fuck);

//| isArray
// console.log(Array.isArray("rahul")); // check it's Array or not

//| from
// console.log(Array.from("hello")); // Converts anything into Array - if possible
// console.log(Array.from({ name: "rahul" })); // error - can't convert

// let s1 = 100;
// let s2 = 200;
// let s3 = 300;
// console.log(Array.of(s1, s2, s3)); // Returns a new Array from a set of elements.
