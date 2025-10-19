const for_each = () => {
  const coding = ["js", "ts", "java", "python"];
  // ForEach returns - (Nothing / undefined)
  const values = coding.forEach((val) => console.log(val));
  console.log(values);
};
// for_each();

const filter_loop = () => {
  const myNums = [1, 2, 3, 4, 5, 6, 7];
  // console.log(myNums);
  const newNums = myNums.filter((num) => num > 5);
  console.log(newNums);
  let using_forEach = () => {
    const use_newNums = [];
    myNums.forEach((val) => {
      if (val > 5) use_newNums.push(val);
    });
    console.log(use_newNums);
  };
  // using_forEach();
};
// filter_loop();

const book_filter = () => {
  {
    const books = [
      {
        title: "Book One",
        genre: "Fiction",
        publish: 1981,
        edition: 2004,
      },
      {
        title: "The Emerald City Caper",
        genre: "Mystery",
        publish: 1995,
        edition: 2012,
      },
      {
        title: "A Galaxy Far, Far Away",
        genre: "Science Fiction",
        publish: 2010,
        edition: 2018,
      },
      {
        title: "The Last Dragon's Whisper",
        genre: "Fantasy",
        publish: 2001,
        edition: 2005,
      },
      {
        title: "Echoes of the Past",
        genre: "Historical Fiction",
        publish: 1965,
        edition: 1999,
      },
      {
        title: "A Culinary Journey",
        genre: "Non-Fiction",
        publish: 2022,
        edition: 2022,
      },
      {
        title: "The Philosopher's Stone",
        genre: "Fiction",
        publish: 1997,
        edition: 2014,
      },
      {
        title: "Zen and the Art of Code",
        genre: "Technology",
        publish: 2018,
        edition: 2023,
      },
      {
        title: "Rivers of Mars",
        genre: "Science Fiction",
        publish: 1955,
        edition: 1978,
      },
      {
        title: "Murder at Midnight",
        genre: "Thriller",
        publish: 2008,
        edition: 2009,
      },
      {
        title: "Poetic License",
        genre: "Poetry",
        publish: 1973,
        edition: 1985,
      },
    ];
    // 1st Request
    let UserBooks = books.filter(
      (bk) => bk.genre == "Poetry" || bk.genre == "Thriller"
    );
    // 2nd Request
    UserBooks = books.filter((bk) => bk.publish >= 2000);
    // 3rd Request
    UserBooks = books.filter(
      (bk) => bk.publish >= 1970 && bk.genre == "Poetry"
    );
    // 4th Request
    UserBooks = books.filter((bk) => {
      return bk.edition >= 2000;
    });
    console.log(UserBooks);
  }
};
// book_filter();
const fill_loop = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newNums = nums.map((val) => {
    return val + 10;
  });
  console.log(newNums);
};
// fill_loop();
const method_chaining = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newNums = nums
    .map((val) => val * 10)
    .map((val) => val * 10)
    .filter((val) => val < 800);
  console.log(newNums);
};
// method_chaining();

let reduce = () => {
  const numsArr = [1, 2, 3];
  const total = numsArr.reduce((acc, val) => {
    console.log(`acc ${acc}, val ${val}`);
    return acc + val;
  }, 10);
  console.log(total);

  const arrow_total = numsArr.reduce((acc, val) => acc + val, 0);
  // console.log(arrow_total);
};
// reduce();

let shoppingCart = [
  {
    itemName: "JS Course",
    price: 399,
  },
  {
    itemName: "Java Course",
    price: 349,
  },
  {
    itemName: "Node.JS Course",
    price: 499,
  },
];
let totalCartPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log('your total cart price :',totalCartPrice);
