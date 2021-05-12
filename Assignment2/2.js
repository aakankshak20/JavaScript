var x
function double(x){
    return x*2;
}

function square(x){
    return x*x;
}

function composedValue(square,double,x){
    return square(double(x));
}

var f1=composedValue(square,double,5);
console.log(f1);
var f1=composedValue(square,double,10);
console.log(f1);



var f2=composedValue(double,square,5);
console.log(f2);
var f2=composedValue(double,square,10);
console.log(f2);