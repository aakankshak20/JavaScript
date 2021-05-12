// list1=[1,4,6];
// list2=[1,2,3,4,5,6];

function mrgsor(list1,list2){
list3=list1.concat(list2);
list3.sort()
for(i=0;i<list3.length;++i){
    for(j=i+1;j<list3.length;++j){
        if(list3[i]==list3[j]){
            list3.splice(j--,1);
        }
    }
}
return list3;

}

var res=mrgsor([1,4,6],[1,2,3,4,5,6]);
console.log(res);