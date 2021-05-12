function maxRepeat(str){
    let len=str.length;
    let count=0;

    let res=str[0];
    for(let i=0;i<len;i++){
        let ccount=1;
        let j=0;
        for(j=j+1;j<len;j++){
            if(str[i]!=str[j])
            break;
            ccount++;
        }
        if(ccount>count){
            count=ccount;
            res=str[i];
        }
    }
    return res;
}

let str="aaaabbbbuusss";
let op=maxRepeat(str);
console.log(op);