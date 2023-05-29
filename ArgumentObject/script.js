function add(){
//console.log(arguments[1]);
//console.log(arguments.length);
if(arguments.length==0){
    console.log("No Arguments passes!");
}else{
    let sum=0;//5+7=12
    for(let i=0;i<arguments.length;i++){
     sum=sum+arguments[i];
    }
    console.log(sum);
}
}
add(5,7);
