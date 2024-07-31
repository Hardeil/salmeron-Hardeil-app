const name = ["John", "Jane", "Mike", "Lisa"];
const dueDate = [5, 10, 15, 20, 25, 30];
const Book = [
  {
    title: "Delta: A Spy Novel",
    author: "Monica",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
  {
    title: "Miss General",
    author: "Moonlight468",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
  {
    title: "Into the Pit",
    author: "Rosalie Wayward",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
  {
    title: "Orion Chase",
    author: "ArgusPalas ",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Available",
  },
  {
    title: "Her Collision",
    author: "Renee",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
  {
    title: "Storm over the Caribbean",
    author: "Robert Thier",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
  {
    title: "The one and only",
    author: "Belle",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Available",
  },
  {
    title: "Empyrean Iris Story Collection",
    author: "Charlie Starr",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Available",
  },
  {
    title: "Aurora",
    author: "Lily Rosies ",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Available",
  },
  {
    title: "The Favorite Twin",
    author: "Renee",
    dueDate: dueDate[Math.floor(Math.random() * dueDate.length)],
    name: name[Math.floor(Math.random() * name.length)],
    status: "Checkout",
  },
];
export default Book;
