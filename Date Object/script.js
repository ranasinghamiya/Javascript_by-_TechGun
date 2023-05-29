//let x=new Date();//current date time
/*let x=new Date(2018, 11, 13, 10, 33, 56, 7);

console.log(x.getTime());
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds()); 
console.log(x.getMilliseconds()); 
console.log(x.getDay());*/

//----set functions (Changes year month date hours minutes seconds milli second)----
/*let x = new Date("October 13, 2018 11:12:33");
x.setFullYear(2020);
x.setMonth(03);
console.log(x);*/
//---- set and change date or any thing after 50 days--------------------
/*let x = new Date("October 13, 2018 11:12:33");
let y=new Date("October 13, 2018 11:12:33");
y.setDate(x.getDate() +50);
console.log(x);
console.log(y);*/

//---compare functions---
let x = new Date("October 13, 2018 11:12:33");
let y=new Date();
if(y>x){
    console.log("x is past date");
}else if(y>x){
    console.log("x is future date");
}else{
    console.log("y is same date");
}
