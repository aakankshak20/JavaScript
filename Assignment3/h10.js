function bankAccounnt(accountNumber,accountHolderName,accoutBalance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accoutBalance=accoutBalance;
    this.isSalary=function(salary){
        console.log((accoutBalance-salary));
    
    },
    this.isoddLimit=function(current){
        console.log((accoutBalance-current));
    }
}

var account1=new bankAccounnt(12345,"aaa bbb ccc",500);
account1.isSalary(250);

var account2=new bankAccounnt(12345,"xxx yyy zzz",1500);
account2.isoddLimit(500);

console.log(account1.accoutBalance);
console.log(account2.accoutBalance);