// var array=[1,2,3,4,5];
var num;
var cnt=0;
var no;
var check=false;
function iseven(num){
        if((num%2)==0){
            return true;
        }
    
    
}
function find(array,iseven){
    //  while(cnt<=array.lenght){
     num=array.slice(cnt,cnt+1);
      no=num.pop();
    //   console.log(no)
      check= iseven(no);
        if(check==true){
            console.log(no);
        //    break;
        }else{
            cnt++;
            find(array,iseven);
        }
    
    } 
 

find([1,4,8,7],iseven);