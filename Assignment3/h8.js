function person(fname,lname,age,skill,dateofbirth,address,marrid,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=marrid;
    this.profession=profession;
}

person1=new person("nikhil","goud",22,["c"],"24/10/1996",{city:"hydrabad",pincode:"521185"},"false","sr analyst");

person2=new person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst");

print=function()
{
    console.log(person1);
    console.log(person2);
}();

