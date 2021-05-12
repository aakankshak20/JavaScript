var x=5;
console.log(x);

function half(x){
    return(x/2);

}

var y=half(2);
console.log(y);
var z=half(3);
console.log(z);
var a=half(4);
console.log(a);
var b=half(28);
console.log(b);

function seven(){
    x=7;
    return x;

}

var p=seven();
console.log(p);

function calculation(a,b,c){
    return((a+b)/c);
}


var res=calculation(1,1,0);
console.log(res);

var res=calculation(-1,-1,0);
console.log(res);

var res=calculation(1,-1,0);
console.log(res);

var array2=["even","odd"];

function isEven(a){
    switch (a%2)
{
    case 0: console.log("even");
            break;
    case 1: console.log("odd");
            break;
}    
}

isEven(9);