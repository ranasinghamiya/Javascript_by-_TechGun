/*let isLoggin= 1;//if here in place of inloggin variable  0 put loggedout if 1 login
if(isLoggin==0){//
    document.write('Login');
}else{
    document.write('Logout');
}
let option=isLoggin==1?"Logout" : "Login";
//  (condition)           (true)    (false)
document.write(option);
//only use for one condition 
*/
let user;
user="Amiya";//user undefined raha to guest user alert ayega
alert(user ?? "Guest User");