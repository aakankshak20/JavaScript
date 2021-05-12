function val(c){
    if( c>= '0'.charCodeAt() && c<='9'.charCodeAt()){
        return(c-'0'.charCodeAt());
    }else{
        return(c-'A'.charCodeAt()+10);
    }
}

function toDecimal(str,bbase){
    let len=str.length;
    let num=0;
    let power=1;
    let i;
    for(i=len-1;i>=0;i--){
        if(val(str[i].charCodeAt())>=bbase){
            console.log("Invalid number::");
            return-1;
        }
        num+=val(str[i].charCodeAt())*power;
        power =power*bbase;
    }
    return num;
}

let str="210";
let bbase=3;

console.log(toDecimal(str,bbase));
