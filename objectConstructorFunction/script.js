/*var student1={
    firstName :"Amiya",
    lastName:"Ranasingh",
    age:25,
    class:12
}
var student2={
    firstName: "Amlan",
    lastName : "Ranasingh",
    age:26,
    class:6
}*/

function Student(first,last,age,cls){
this.firstName = first;
this.lastName = last;
this.age=age;
this.class = cls;
}

var student1=new Student("amiya","ranasingh",25,5);

//var student2=new Student("ajeet","ranasingh",26,3);
//var student3=new Student("apu","ranasingh",25,9);
this.nationality="Indian";
student1.name=function(){
    return this.firstName+" "+this.lastName;
}
console.log(student1.name());

