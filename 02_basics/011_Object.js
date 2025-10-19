//@ts-nocheck
function obj_function() {
  // Singleton
  // Object.create('');
  // Object Literals

  const sym = Symbol("hello world");

  const user = {
    "name": "Rahul",
    "Full Name": "Surajit Saha",
    "age": 19,
    [sym]: "planet",
    "location": "Kolkata",
    "email": "rahulsaha8339@gmail.com",
    "isLogged": false,
    "lastLoggedIn": ["Monday", "Friday"],
  };

  // Accessing
  console.log(user.name);
  console.log(user["location"]);
  console.log(user["Full Name"]);
  console.log(user[sym]);

  // Object.freeze(user);
  user.email = "rahul144hz@gmail.com"; // it will not change after freeze(No Error-but no value change)
  console.log(user.email); // 'rahulsaha8339@gmail.com'
  user.greeting = function () {
    console.log(`hello how are you`);
  };
  user.greetingTwo = function () {
    console.log(`hello how are you ,${this["Full Name"]}`);
  };

  user.greeting();
  user.greetingTwo();
}

function obj_function_2() {
  //| Objects part 2
  const myUser = new Object(); // Singleton
  const user = {}; // Non-Singleton
  myUser.id = "123abc";
  myUser.name = "Sam";
  myUser.isLoggedIn = false;
  // console.log(myUser);

  const regularUser = {
    email: "rahul144hz@gmail.com",
    fullName: {
      firstName: "Rahul",
      lastName: "Saha",
    },
  };

  // console.log(regularUser?.fullName["firstName"]);

  let obj1 = { 1: "a", 2: "b" };
  let obj2 = { 3: "c", 4: "d" };

  let obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
  let obj4 = Object.assign({}, obj1, obj2); // (target,source)
  // console.log(obj3);
  // console.log(obj4);

  let obj5 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  // console.log(obj5);

  const users_data = [
    {
      id: 1,
      name: "Rahul",
      age: 19,
    },
    {
      id: 2,
      name: "Rahul",
      age: 19,
    },
    {
      id: 3,
      name: "Rahul",
      age: 19,
    },
  ];

  console.log(Object.keys(obj5)); // [ '1', '2', '3', '4' ]
  console.log(Object.values(obj5)); // [ 'a', 'b', 'c', 'd' ]
  console.log(Object.entries(obj5)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]
  console.log(Object.hasOwn(obj5, "4")); // true
  console.log(Object.hasOwn(obj5, "a")); // false
}

(function obj_de_structure() {
  const course = {
    courseName: "JS Chai",
    price: 399,
    courseInstructor: "Hitesh",
  };

  let { courseInstructor: Instructor } = course;
  console.log(Instructor); // Hitesh
})();

//| API : JSON
{
  name: "Rahul";
  age: 19;
};
[
  {},
  {}, 
  {}
];
