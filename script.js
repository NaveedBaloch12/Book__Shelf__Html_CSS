const main__container = document.querySelector(".main__container");
const add_book_btn = document.querySelector(".add_book_btn");
const massage = document.querySelector(".massage");

const inputForm = document.querySelector("form");
const dialog = document.querySelector("dialog");

const inputs = document.querySelectorAll("input")
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const select = document.querySelector('select');

const PopUp = document.getElementById('pop_up');

const showBtn = document.querySelector('#show__pop_up');
showBtn.addEventListener('click', () => {
    resetInputs();
    dialog.showModal();
});


add_book_btn.addEventListener("click", (e) => {
    if (title.value === "" || author.value === "" || pages.value === "") {
        massage.style.display = "block";
    } else {
        dialog.close();
        Book(title, author, pages, select);
        addBookToLibrary(bookBbj);
        CreateBook(bookBbj.bookName, bookBbj.authorName, bookBbj.numberPages, bookBbj.Status)

    }
});



const cancelBtn = document.querySelector('.cancel_btn');
cancelBtn.addEventListener('click', () => {
    dialog.close();
});


// ==========================================================

function resetInputs() {
    massage.style.display = "none";
    inputs.forEach(input => {
        input.value = "";
    })
}

function removeOBject(myLibrary){
    myLibrary =  myLibrary.slice(0);
    return myLibrary;
}

// ===============================================================

const myLibrary = [];

var bookBbj
function Book(title, author, pages, select) {
    bookBbj = {
        bookName: title.value,
        authorName: author.value,
        numberPages: pages.value,
        Status: select.value
    };
    return bookBbj;
}

function addBookToLibrary(bookBbj) {
    myLibrary.push(bookBbj)
    return myLibrary;
}

const books__list = document.querySelector('.books__list');

function CreateBook(bookName, authorName, numberPages, Status) {
    var book = document.createElement("div");

    book.classList.add("Book");
    books__list.appendChild(book);

    var heading1 = document.createElement("h2");
    heading1.classList.add("heading__lrg");
    heading1.textContent = "Book Name:";
    book.appendChild(heading1);
    
    var BookTitle = document.createElement("div");
    BookTitle.classList.add("heading__md");
    BookTitle.classList.add("Book__Info");
    BookTitle.textContent = bookName;
    book.appendChild(BookTitle);


    var heading2 = document.createElement("h2");
    heading2.classList.add("heading__lrg");
    heading2.textContent = "Author Name:";
    book.appendChild(heading2);
    
    var WriterName = document.createElement("div");
    WriterName.classList.add("heading__md");
    WriterName.classList.add("Book__Info");
    WriterName.textContent = authorName;
    book.appendChild(WriterName);


    var heading3 = document.createElement("h2");
    heading3.classList.add("heading__lrg");
    heading3.textContent = "Number Of Pages:";
    book.appendChild(heading3);
    
    var PagesQuantity = document.createElement("div");
    PagesQuantity.classList.add("heading__md");
    PagesQuantity.classList.add("Book__Info");
    PagesQuantity.textContent = numberPages;
    book.appendChild(PagesQuantity);


    var heading4 = document.createElement("h2");
    heading4.classList.add("heading__lrg");
    heading4.textContent = "Read Book?";
    book.appendChild(heading4);
    
    var Read = document.createElement("div");
    Read.classList.add("heading__md");
    Read.classList.add("Book__Info");
    Read.textContent = Status;
    book.appendChild(Read);

    var button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("Book__Info");
    button.textContent = "Remove Book";
    book.appendChild(button);

    button.addEventListener("click", () => {
        book.style.display = "none";
    });
}

