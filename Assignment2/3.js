// var array=[1,2,3,4,5];
// var num;
var check=false;

function iseven(num){
    if(num%2==0){
        return true;
    }
    
}
function find(array,iseven){
    for(i=0;i<array.length;i++){
        num=array[i];
        check= iseven(array[i]);
       if(check==true)
       {
         val=array[i];
          console.log(val);
           break;
       }
 
      
    }
}



find([1,4,3,7],iseven);