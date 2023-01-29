let myLibrary = [];

function Books(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibraty(e){
    e.preventDefault();
    let newBook = new Books(title, author, pages, read);
    myLibrary.push(newBook);
}

const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').value;
const submitButton = document.querySelector('button').addEventListener('submit', addBookToLibraty);


