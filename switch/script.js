//if input=1,"y","yes" output=countinue....
//if input=0,"n", "no" output= End....
/*let input;
input="y";
if(input===1){
  document.write("countinue...");
}else if(input==="y"){
    document.write("countinue...");
}else if(input==="yes"){
    document.write("countinue...");
}else if(input===0){
    document.write("End...");
}else if(input==="n"){
    document.write("End...");
}else if(input==="no"){
    document.write("End...");
}else{
    document.write("Wrong input");
}*/
//===comparison
let input;
input="y";
switch(input){
    case 1://if(input===1)
       document.write("countinue...");
       break;
    case "y"://if(input==="y")
       document.write("countinue...");
       break;
       case "yes"://if(input==="yes")
       document.write("countinue...");
       break;
    case 0: if(input==="0")
        document.write("End...");
        break;
        case "n"://if(input==="n")
        document.write("End...");
        break;
        case "no"://if(input==="no")
        document.write("End...");
        break;
        default:
            document.write("Wrong input");
}