let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener('submit', addBookToLibrary);


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event){
    event.preventDefault();
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
    form.reset();
    setTimeout(createCard(), 3000);
}

function createCard(){
    let i = myLibrary.length - 1;
    let readStatus = '';
    if(myLibrary[i].read === 'yes'){   //ovo ispravit kasnije
        readStatus = 'checked';
    }
    main.innerHTML += `
    <div class="card">
                <div class="remove-container">
                    <div>✖</div>
                </div>
                <div class="card-inner-container">
                    <div class="name-container">
                        <p class="bookName">${myLibrary[i].title}</p>
                    </div>
                    <div class="info-container">
                        <div class="author-container">
                            <div><b>Author:</b></div>
                            <div>${myLibrary[i].author}</div>
                        </div>
                        <div class="pages-container">
                            <div><b>Pages:</b></div>
                            <div>${myLibrary[i].pages}</div>
                        </div>
                        <div class="read-container">
                            <div>
                                <label for="read"><b>Read:</b></label>
                            </div>
                            <div>
                                <input type="checkbox" id="read" name="read" ${readStatus}>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="switch-container">
                </div>
            </div>`
}
