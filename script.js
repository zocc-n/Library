let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event){
    event.preventDefault();
    console.log(title.value);
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
    form.reset();
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const form = document.querySelector('form');

form.addEventListener('submit', addBookToLibrary);
