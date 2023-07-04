export default class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("library")) || [];
    this.bookList = document.getElementById("book-list");
    this.addButton = document.getElementById("add-btn");
    this.titleInput = document.getElementById("bookTitle");
    this.authorInput = document.getElementById("bookAuthor");
    this.addButton.addEventListener("click", () => this.addBook());
    this.render();
  }

  addBook() {
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();
    if (title === "" || author === "") {
      return;
    }
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem("library", JSON.stringify(this.books));
    this.renderBook(book);
    this.titleInput.value = "";
    this.authorInput.value = "";
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      localStorage.setItem("library", JSON.stringify(this.books));
      const bookElement = document.getElementById(book.title);
      if (bookElement) {
        bookElement.remove();
      }
    }
  }

  renderBook(book) {
    const bookElement = document.createElement("li");
    bookElement.setAttribute("id", book.title);
    const titleElement = document.createElement("h3");
    titleElement.style.margin = "0";
    titleElement.textContent = book.title;
    const authorElement = document.createElement("p");
    authorElement.style.margin = "0";
    authorElement.textContent = book.author;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.addEventListener("click", () => this.removeBook(book));
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(deleteBtn);
    this.bookList.appendChild(bookElement);
  }

  render() {
    this.bookList.innerHTML = "";
    this.books.forEach((book) => {
      this.renderBook(book);
    });
  }
}
