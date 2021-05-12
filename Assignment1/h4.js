var no=prompt("Enter any number");
 var sum=0;

 for(var i=1;i<=no;i++)
 {
     
     sum=sum+i;
 }
  var sumsg=document.getElementById("number");

  sumsg.innerHTML="Here is sum for "+" number "+no+" = "+sum;