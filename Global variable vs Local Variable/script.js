//global is outer side
//local is under  function

let car="Add";//Global variable

function add(){
let result=33;//Local variable
console.log(result);
}

function sub(){
    let result=50;//Local variable
    console.log(result);
}

add();
sub();