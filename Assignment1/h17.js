function pallstring(str){

    var stringn=string.split('');

    var reversestringv=stringn.reverse();

    var reversestring=reversestringv.join('');

    if(string==reversestring){
        console.log("Equal");
    }else{
        console.log("not equal");
    }

}

var string=prompt("Enter string");
pallstring(string);
//madam
//m a d a m
//m a d a m
//madam