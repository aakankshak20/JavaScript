var longword1;
function longest(str){
    var str22=str;
    var longw=0;
     for(var i=0;i<str22.length;i++){
           var x=str22.indexOf("q")
                    if(x!=-1){
                        //  i++;
                        // longw++;
                    }else{
                        
                         longw++;
                    }
                
           
        }
         
        
 return longw;    
}
var str=["stop","quit","exit"];
var res=longest(str);
console.log(res);