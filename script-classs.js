const myLibrary = [];

class Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};




function addToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numOfPage = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, numOfPage, read);
  // console.log(newBook)
  myLibrary.push(newBook);
  render();
}

const submit = document.querySelector("#submit");

const addBook = document.querySelector("#new-book-btn");
const newbookform = document.querySelector("form");

addBook.addEventListener("click", () => {
  newbookform.style.display = "block";
});

submit.addEventListener("click", (event) => {
  event.preventDefault();

  addToLibrary();
});

function render() {
  // console.log("hey")

  const libraryBookDiv = document.querySelector("#library");

  libraryBookDiv.innerHTML = "";
  myLibrary.forEach((element) => {
    let bookdiv = document.createElement("div");
    bookdiv.setAttribute("class", "book-card");

    bookdiv.innerHTML = `

<div class="card-header">
    <h3 class="title">${element.title}

    </h3>
    <h5 class="author">by ${element.author}</h5> 
    </div>
    <div class="card-body">
    <p>${element.pages}
    </p>
    <p class="read-status">${element.read ? "Read" : "Not Read Yet"}</p>
    <button class"remove-btn" onclick="removeBook(${myLibrary.indexOf(
      element
    )})">Remove
</button>
    </div>





`;

    // bookdiv.innerHTML=`<p> ${element.title}</p>`
    // console.log(myLibrary.indexOf(element))
    libraryBookDiv.appendChild(bookdiv);
    // console.log(element)
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}



const read=document.querySelector("#read").checked
read.addEventListener("click",()=>{
  toggleRead()

})