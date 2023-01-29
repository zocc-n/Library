let myLibrary = [];

function Books(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibraty(e){
    e.preventDefault();
    
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submitButton = document.querySelector('button').addEventListener('submit', addBookToLibraty);


