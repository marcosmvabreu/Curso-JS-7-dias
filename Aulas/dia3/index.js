// Objetos 

// Factory
// function createBook(title, author, pages){
//     const  book = {
//         title: title,
//         author:author,
//         pages: pages,
    
//         addPages: (quantPageAdd)=>{
//             book.pages += quantPageAdd;
//         },
//         printBook: ()=>{
//             console.log(`Printing ${book.pages} pages!`)
//         }
//     }

//     return book;
// }

function CreateBook(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages; 
}
const book1 = new createBook('Arrume sua cama', 'Wilian', 121);
console.log(book1)

// Constructor
