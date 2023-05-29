//functions to interact with the user : alert,prompt,confirm.
/*
1. alert () - show a message.

2. prompt () - shows a message,input text. It returns the text on ok or,if cancel button or Esc is clicked,null.

3. confirm () - shows a message,confirm with "OK" or "Cancel". It returns true for OK and false for cancel/Esc.
*/
//Note: All these pause scripts are execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed.


//-----alert('Welcome !');---

/*let Name=prompt('Enter your Name');
if(Name!=null) {
    document.write(`Your Name is ${Name}`);
}
else{
    document.write(`Name field was blank`);
}*/

//--------Confirm function------
//confirm('Are you sure you want to delete this')
let response=confirm('Are you sure you want to delete this?');
if(response){
   document.write('Deleted')
}else{
    document.write('Not Deleted')
}