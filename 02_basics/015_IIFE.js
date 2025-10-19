// Immediately Invoked Funciton Expression (IIFE)
// Global Scope pollutions
(function codig() {
  // named IIFE
  console.log("DB CONNECTED");
})();
// simple IIFE
((name) => {
  console.log("DB CONNECTED tow", name);
})("mongoDB");
// IIFE have to end with semicolon ;


