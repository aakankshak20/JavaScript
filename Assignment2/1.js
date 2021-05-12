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

var result=composedValue(square,double,10);
console.log(result);