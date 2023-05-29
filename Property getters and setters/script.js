//--Person name Uppercase----------------------------------------------------------------

var person={
    name: 'Amiya',
    age:25,

    /*getname:function() {
        return this.name.toUpperCase();
    }*/
    //get getname() {
     //   return this.name.toUpperCase();
    //},
    set setName(n){
        this.name=n.toUpperCase();
    }
};
//console.log(person.getname);
person.setName="amiya"
console.log(person);