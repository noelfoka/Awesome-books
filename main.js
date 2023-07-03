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

const removeBook = (title) => {
  const book = document.getElementById(title);
  book.remove();
  library = library.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('library', JSON.stringify(library));
};

const addBook = (bookObj) => {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('LI');
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `<h3>${bookObj.title}</h3><p>${bookObj.author}</p>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Remove';
  deleteBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
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
