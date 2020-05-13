const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks"
);

const bookSeed = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    synopsis: "Harry finds out he's a wizard and magic happens.",
  },
  {
    title: "Clean Code",
    author: "Code Guy",
    synopsis: "Learn how to code, CORRECTLY.",
  },
  {
    title: "Because of Winn-Dixie",
    author: "Mr. Dixie",
    synopsis: "A dog and a girl become best friends, if I remember correctly.",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
