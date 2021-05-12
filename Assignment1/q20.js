var list1=["a","b","c"];
var list2=[1,2,3];
var list3=[0,0,0];

function newlist(list1,list2){
    var l=list1.length+list2.length;
    var i=0,j=0;
    var r=[];
    for(k=0;k<l;k++){
        if(k%2==0){
            r[k]=list1[j++];
        }else{
            r[k]=list2[i++];
        }
    }
    return r;
}

var res=newlist(list1,list2);
console.log(res);