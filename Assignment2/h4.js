// var array=[1,2,3,4,5];
function map(array,square){
    var nearray=new Array();
    for(i=0;i<array.length;i++){
       
        var ele=square(array[i]);
        nearray.push(ele);
    }
 console.log(nearray);
}


function square(num){
    return num*num;
}

map([1,2,3,4,5],square);

map([1,4,9,16,25],Math.sqrt);