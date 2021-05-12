
var cnt=0;
var num;
var no;
var res;
function map(array,square){
   max=array.length;
    while(cnt<max){
                 num=array.slice(cnt,cnt+1);
                no=num.pop();
                // console.log(no);
                
                res=square(no);
                cnt++;
                console.log(res);
                map(array,square);
    
    }
}

function square(num){
    return num*num;
}


map([1,2,3,4,5],square);

map([1,4,9,16,25],Math.sqrt);