let library = [];

const getInput = () => {
  const book = {};
  const titleInput = document.getElementById('bookTitle');
  const authorInput = document.getElementById('bookAuthor');

  // Return null if either title or author input is empty
  if (titleInput.value.trim() === '' || authorInput.value.trim() === '') {
    return null;
  }

  book.title = titleInput.value;
  book.author = authorInput.value;
  return book;
};

const removeBook = (id) => {
  const book = document.getElementById(id);
  book.remove();
  library = library.filter((bookObj) => bookObj.id !== id);
  localStorage.setItem('library', JSON.stringify(library));
};

const addBook = (bookObj) => {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('LI');
  book.setAttribute('id', bookObj.title);
  const titleElement = document.createElement('h3');
  titleElement.style.margin = '0'; // Remove margin
  titleElement.textContent = bookObj.title;
  const authorElement = document.createElement('p');
  authorElement.style.margin = '0'; // Remove margin
  authorElement.textContent = bookObj.author;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Remove';
  deleteBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(titleElement);
  book.appendChild(authorElement);
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';
};

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const book = getInput();

  // If book is null, do not proceed
  if (book === null) {
    return;
  }

  library.push(book);
  addBook(book);
  localStorage.setItem('library', JSON.stringify(library));
});

window.onload = () => {
  library = JSON.parse(localStorage.getItem('library')) || [];

  library.forEach((book) => {
    addBook(book);
  });
};
