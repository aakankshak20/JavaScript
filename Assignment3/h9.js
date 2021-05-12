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

amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hydrabad",pincode:"521185"},"false","sr analyst");

abhisheik=new person("abhisheik",21,"HTML","08/06/1997","false","jr analyst");
var abhisheik=Object.create(amithab);


aaradhya=new person("aaradhya",10);
var aaradhya=Object.create(abhisheik);

print=function(){
    console.log(amithab);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
    console.log(aaradhya.lname);
    console.log(aaradhya);
}();

