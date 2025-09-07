function _date_() {
  let myDate = new Date();
  console.log(myDate); // 2025-09-07T09:42:19.721Z
  //
  console.log(myDate.toString()); //  Sun Sep 07 2025 15:12:19 GMT+0530 (India Standard Time)
  console.log(myDate.toDateString()); //  Sun Sep 07 2025
  console.log(myDate.toTimeString()); //  15:12:19 GMT+0530 (India Standard Time)
  //
  console.log(myDate.toLocaleString()); //  7/9/2025, 3:12:19 pm
  console.log(myDate.toLocaleDateString()); //  7/9/2025
  console.log(myDate.toLocaleTimeString()); //  3:12:19 pm
}

let myCreatedDate = new Date(2025, 1, 12, 2, 23, 11);
console.log(myCreatedDate.toDateString()); // Wed Feb 12 2025
console.log(myCreatedDate.toLocaleTimeString()); // 2:23:11 am

let myDate = new Date("2025-9-7");
console.log(myDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1st jan 1970 to now miliseconds
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // mil to sec

let newDate = new Date();
console.log(newDate.getDate()); // current Date
console.log(newDate.getHours()); // current Hour

newDate.toLocaleDateString("default", {
  weekday: "long",
});
