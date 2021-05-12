var person=function (firstname,middlename,lastname){
    this.firstname=firstname,
    this.lastname=lastname,
    this.middlename=middlename

}

var person1=new person("aaa","bbb","ccc");
console.log("Name::"+person1.firstname+" "+person1.middlename+" "+person1.lastname);

// var person2=new person("aaa","ccc");
// console.log("Name::"+person2.firstname+" "+person2.lastname);

var person=function (firstname,lastname){
    this.firstname=firstname,
    this.lastname=lastname

}

person.prototype.middlename="bbb";
console.log(person.prototype);

var person1=new person("aaa","ccc");
console.log("Name::"+person1.firstname+"  "+person1.lastname);

// var person2=new person("aaa","ccc");
// console.log("Name::"+person2.firstname+" "+person2.lastname);
console.log(person1.middlename);