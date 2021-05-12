 var no= prompt("Enter number");

var ch = prompt("Enter Choice 1-sum , 2-multiply");



switch(ch){

        case 1: sum(no);
                break;
        case 2: mul(no);
                break;
}

function sum(no){
    var total=0;
    for(i=1;i<=no;i++){
        total+=i;
    }
    console.log(total);
}




function mul(no){
    var total=1;
    for(i=1;i<=no;i++){
        total*=i;
    }
    console.log(total);
}




