function check(str){
    var len=str.length;

    str.sort();

    for(i=1;i<len;i++){
        if(str[i].charCodeAt()-str[i-1].charCodeAt() ==1)
        return false;
    }
    return true;
}

var str1= "decef";

if(check(str1.split('')==true))
    console.log("con");
else
    console.log('Not');