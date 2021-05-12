var list = [1,21,3,49,5,6];
var chk=prompt("Enter no to find");

for(i=0;i<list.length;i++)
{
    if(chk==list[i]){
        console.log("Found at position " +(i+1));
    }
}