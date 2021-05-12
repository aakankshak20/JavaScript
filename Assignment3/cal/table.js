function createtable(){
    row=prompt("Enter no of rows");
    col=prompt("Enter no of columns");

    for(var r=0;r<parseInt(row);r++){
         var row1=document.getElementById('tbl').insertRow(r);
        for(var c=0;c<parseInt(col);c++){
            var col1=row1.insertCell(c);
            col1.innerHTML="Row:"+r+"Column:"+c;
        }
    }
}