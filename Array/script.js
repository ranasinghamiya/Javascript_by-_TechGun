/*let book1="Math";
let book2="Physics";
let book3="Bio";
let book4="Computer Science";

console.log(book2);*/


//let book=["math","Physics","Bio","Computer Science"];

//let asset=[1,3,40.3,100,"Math"]
//let book=new Array("math","Physics","Bio","Computer Science");//same meaning as above
//console.log(book[2]);

//----update array--------------------------------
//book[1]="English";
//console.log(book);
//console.log(book.length);

//----push array--------------------------------
//book.push("Hindi");
//console.log(book);

//----add an element in first in array--------------------------------
//book.unshift("Hindi");
//console.log(book);

//delete an element in last in array--------------------------------
//book.pop();
//console.log(book);

//----delete an element in first in array--------------------------------
//book.shift();
//console.log(book);

//----delete an element in position  in array--------------------------------
//book.slice(1,2);
//console.log(book);

//-----empty an array--------------------------------
//book=[];
//book.length = 0;
//console.log(book);

//-----position an array--------------------------------
//let position = book.indexOf("Bio")
//console.log(position);

//---it is an array- or not-------------------------------
//let book ="Math";
//console.log(Array.isArray(book));

//--all text are single single word-------------------------------
//let book =['Math', 'Physics', 'Bio', 'Computer science']
//let text="This is a random text";
//let wordArray=text.split("s");
//console.log(wordArray);
//let wordArray=book.join(" ");
//console.log(wordArray);

//-----------add two arrays-----/concat array---------------------------
/*let book1=["Hindi","English"];
let book2=["Happy","Amiya"]
let NewBook=book.concat(book1,book2);
console.log(NewBook);*/

//--------multidimensioal array---------
/*let book1=['Math', 'Physics', 'Bio', 'Computer science']
let bookWithPages=[
    ["Math","300"],
    ["Physics","500"],
    ["Bio","500"]
];
let fetch=bookWithPages[1][0];
//console.log(bookWithPages);
console.log(fetch);*/

let book=["Math", "Physics", "Bio", "Computer science"];
/*for(let i=0;i<book.length;i++){
    console.log(`Element ${i} is ${book[i]}\n`);
}*/
//-------forEach Loop --------------------------------
book.forEach(myFu);
function myFu(value){
console.log(value);
}



