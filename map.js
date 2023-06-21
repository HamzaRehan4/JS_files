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
