
function padChars(no,char){
    if(no){
        var sum=char;
        while(no>1){
            no--;
            sum+=char;
            
        }
    }else{
        console.log("please enter valid no");
    }
  return  sum;
}

 var result=padChars(5,"x");
 console.log(result);
 var result=padChars(7,"-");
 console.log(result);