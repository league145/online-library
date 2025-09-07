const books = [
  { title: "Clean Code", author: "Robert C. Martin" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas" },
  { title: "Refactoring", author: "Martin Fowler" },
  { title: "Design Patterns", author: "Erich Gamma et al." },
  { title: "You Don’t Know JS", author: "Kyle Simpson" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson & Gerald Jay Sussman" },
  { title: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest, Stein" },
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "Head First Design Patterns", author: "Eric Freeman & Elisabeth Robson" }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <strong>${book.title}</strong><br>
    <em>${book.author}</em>
  `;
  bookList.appendChild(card);
});
