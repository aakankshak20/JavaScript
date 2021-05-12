var list=[1,2,3,4,5];
var fsum=0;
var wsum=0;
for(i=0;i<list.length;i++){
        fsum+=list[i];
}
console.log(fsum);

var cnt=0;
while(cnt<list.length){

     wsum=wsum+list[cnt];
    cnt++;
}

console.log(wsum);


