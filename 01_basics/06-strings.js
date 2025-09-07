{const name = "rahul";
console.log(name[2]);
const age = 19;
console.log(name + " " + age + " value"); // concatenate
console.log(`Hello my name is ${name} and my age is ${age}`); // backticks
const gameName = new String("Car X Street"); // using : new String()
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4) + ":index 3"); // using index to know the character
console.log(gameName.indexOf("S")); // using character to find its index
const st1 = gameName.substring(gameName.length, 3); // extracts a portion of a string and returns it as a new string, without modifying the original string
console.log(st1);
const st2 = gameName.slice(-4); //extracts a part of String
console.log(st2);
const st3 = "    Rahul   ";
console.log(st3.length); // show the length of string
console.log(st3.trim()); // trim the starting & ending spaces from string except the mids
const url = "https://rahul.com/rahul%20saha";
console.log(url.replace("%20", "-")); // replace from string
console.log(url.includes("rahul")); // checks url inclue(true/false)

console.log('hello this split'.split(" ")); // splits the string into an array
}