const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring objects

const Person = {
  name: "hamza",
  age: 28,
  address: {
    city: "islamabad",
    country: "Pakistan",
  },
};

const { name, age } = Person;
const {
  address: { city },
} = Person;
console.log(name);
console.log(age);
console.log(city);

const book = getBook(2);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title);

//Destructuring with arrays
const array = [1, 2, 3, 4, 5];
//rest operator
const [first, third, ...rest] = array;
console.log(first, third, rest);

//spread operator->takes all the values from array and place 1 by 1 and
const newElement = [...array, 6];
console.log(newElement);

//rest operator
const movies = ["MI6", "MI7", "Pathan", "Hamsafr"];
const [one, ...others] = movies;
console.log(one, others);

const mybook = {
  author: "hamza",
  age: "22",
  title: "0 Fucks Given!",
};

//adding property to last using spread
const newProperty = { ...mybook, pages: "584" };
console.log(newProperty);

//adding to start using spread
//spread is used to update the properties of object
const addtoStart = { bookNo: "10", ...mybook };
console.log(addtoStart);

//template literals ->you can also pass a function in templte literals

function add() {
  let var1 = 4;
  let var2 = 8;
  return var1 + var2;
}

const string = `The function named add returns the sum of 4 and 8 which is: ${add()}`;

console.log(string);

//terniary operator
const page = 1000;
const count =
  page < 1000 ? "pages are less than 1000" : "pages are more than 1000";
console.log(count);

const myage = 18;
const res = myage < 18 ? "Not a teen-ager" : "A teen-ager";
console.log(res);

//arrow function
const sum = (a, b) => {
  return a + b;
};

console.log(`the sum is ${sum(5, 3)}`);

const diff = (a, b) => a - b;
console.log(`the arrow function returns the difference, that is ${diff(4, 8)}`);

//optional chaining-> we use it when we are not sure whether the property
//exists or not. if it doesnot exist then there is no error thrown
//instead it returns undefined
//->in objects
const PersonInfo = {
  name: "hamza",
  age: 22,
  id: "0484",
  address: {
    city: "islamabad",
    sector: "i-10/1",
    country: "Pakistan",
  },
};

console.log(PersonInfo.address);
console.log(PersonInfo.address.state?.name);

//->in Arrays
//array of size 3
const newArray1 = [
  { name: "hamza", age: 22 },
  { name: "Ali", age: 22 },
  { name: "Zain", age: 22 },
];
console.log(newArray1.length);
console.log(newArray1[2].name);
//now this gives undefined instead of an error
console.log(newArray1[7]?.name);

//map function
const book1 = [
  { name: "Harry Potter", pages: 10 },
  { name: "Charlie", pages: 15 },
  { name: "Theodore", pages: 25 },
  { name: "Nexus" },
  { name: "Oliver Twist" },
];

const titles = book1.map((book1) => ({
  pages: book1.pages,
  name: book1.name,
}));
console.log(titles);

const Book_Details = [
  { author: "Hamza", total_pages: 400, Volume: 1 },
  { author: "Ali", total_pages: 420, Volume: 2 },
  { author: "Zain", total_pages: 440, Volume: 3 },
  { author: "Usama", total_pages: 480, Volume: 4 },
  { author: "Bilal", total_pages: 444, Volume: 5 },
];

const details = Book_Details.map((Book_Details) => ({
  author: Book_Details.author,
  pages: Book_Details.total_pages,
  volume: Book_Details.Volume,
}));

console.log(details);

//array filter method
const filter1 = Book_Details.filter(
  (Book_Details) => Book_Details.total_pages == 400
);
console.log(filter1);

//reduce function
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not change the original array.
//we can also pass starter value. for instance we want to calculate the sum of elements of an array and then add 20 in it,
//we can pass 20 as a starter value
const sum_Array = [1, 2, 3, 4]; //..sum is 10 now we want to add 20
const sum_ele = sum_Array.reduce((acc, curr) => acc + curr, 20);
console.log(sum_ele);

let arr = [1, 100, 5, 8, 40];
const avg = arr.reduce((acc, curr, last, array) => {
  debugger;
  let total = acc + curr;
  if (last === array.length - 1) {
    return total / arr.length;
  }
  return total;
});
console.log(avg);

const product = arr.reduce((acc, curr) => acc * curr);
console.log(product);

//sort function
//sorted in ascending order
let sorted_array = arr.sort((a, b) => a - b);
console.log(sorted_array);

//for descending use (b-a)
let descending_sort = arr.sort((a, b) => b - a);
console.log(descending_sort);

let array_num = [1, 5, 9, 40, 3];
let new_sorted = array_num.slice().sort((a, b) => b - a);
console.log(new_sorted);
console.log(array_num);
