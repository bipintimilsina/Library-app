const newBookBtn=document.querySelector("#new-book-btn")



const myLibrary = [];
//mylibrary is the array intwhich teh objects like obooks are gonna libe like sted rihgt this is the case now ahtw we do like is the start nwe button thisngy ma like we aer gonna be like putting the 
function Book(title,author,pages,read) {
  this.title=title
  this.author=author
  this.pages=pages
  this.read=read
  
}

const form=document.querySelector("#new-book-form")

newBookBtn.addEventListener("click",()=>{
  form.style.display='block'
})

const submit=document.querySelector("#submit")
submit.addEventListener("click",(event)=>{
event.preventDefault()

addBookToLibrary()
console.log(myLibrary)
render()

})


function addBookToLibrary() {



const title=document.querySelector("#title").value
const author=document.querySelector("#author").value
const pages=document.querySelector("#pages").value
const read=document.querySelector("#read").checked



  const newBook=new Book(title,author,pages,read)
  // do stuff here
  myLibrary.push(newBook)
}



function render()
{
const libraryBookDiv=document.querySelector("#library")
const Bookdiv=document.createElement("div")
Bookdiv.setAttribute("class","book-card")
myLibrary.forEach((element,index)=>
  {
    console.log(element.title)
 Bookdiv.innerHTML=`
 
 
 
 <div class="card">
 <div class="card-header">
 <h2>${element.title}</h2>
<h4>${element.author}</h4>
<h4>${element.pages}</h4>
<h4>${(element.read)?"Read":"Not Yet read"}</h4>


</div>    
</div>
`
}
)

libraryBookDiv.appendChild(Bookdiv)
}