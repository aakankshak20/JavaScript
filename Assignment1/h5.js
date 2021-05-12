var no=17;
 var sum=0;

 for(var i=1;i<=no;i++)
 {
     if( ((i%3)==0) || ((i%5)==0) ){
        sum=sum+i;
     }
     
 }
  var sumsg=document.getElementById("multiple");

  sumsg.innerHTML="Here is sum for "+" number "+no+" = "+sum;