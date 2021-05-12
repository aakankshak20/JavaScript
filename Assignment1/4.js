var person=function (firstname,lastname){
    this.firstname=firstname,
    this.lastname=lastname

}

var person1=new person("aaa","bbb");
console.log("Name::"+person1.firstname+" "+person1.lastname);

var person2=new person("aaa","bbb");
console.log("Name::"+person2.firstname+" "+person2.lastname);