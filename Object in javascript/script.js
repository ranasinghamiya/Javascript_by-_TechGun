//Properties of object
let person={
    firstName: 'John',
    lastName: 'kumar'
};
person.age=25;
delete person.lastName;
//person.firstName = 'Jeet';
//console.log(person.firstName);
for(let key in person){
    //console.log(key);
    console.log(key+": "+person[key]);
}
