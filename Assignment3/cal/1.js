function convert(){
    var c=document.getElementById('data').value;
        var f=(c-32)*1.8;
      document.getElementById('res').innerText= c+"f="+f+"c";
       
       
}
var bt=document.getElementById('bt');
var ch=document.getElementById('data');
var message=document.getElementById('message');

bt.onsubmit= function(){
    if(ch.value==""){
        message.innerHTML = "please enter a name";
    }else{
        message.innerHTML="";
    }
}
