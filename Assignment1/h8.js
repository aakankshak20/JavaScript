
const no=prompt("Enter no");
var ck=true;

if(no==1){
    document.write("Niether prime  nor composite");
}else {

for(i=2;i<no;i++){
    if( no % i== 0){
        ck=false;
        break;
    }
}

if(ck){
    document.write("prime");
}else{
    document.write("<br>");
}

}

