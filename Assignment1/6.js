var string=function(firstname,lastname){
    this.firstname=firstname,
    this.lastname=lastname
}

var string1=new string("aaa","bbb");
var ans=eval(string1);

console.log(ans);