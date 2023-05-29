//---random number generator---
/*let x= Math.random();
console.log(x);//0-1 under any number generator*/
//let x= Math.random();
//--Random  integer number----
let x=Math.floor(Math.random()*10);//0-9 number generator
console.log(x);//3/9/4
//--random number between  0 to 100----
let y=Math.floor(Math.random()*100)+1;//1-100number generator
console.log(y);
//---random number generator with lower limit and higher limit---here max=25,min =15---

/*let z=Math.floor(Math.random() * (25-15))+15;
console.log(z);*/


    //using function method
    function getRandom(min, max) {
        let z=Math.floor(Math.random() * (max-min+1))+min;
        return z;
    }
    console.log(getRandom(10,20));


