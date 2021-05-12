let cnt=0;
while(cnt<3){
    let n = window.prompt("enter number"); 
    let y=parseInt(n);
    // console.log(typeof y);
    // console.log(y);
    if(y>=1 && y<=30){
        let string = "";
    for (let i = 1; i <= n; i++) {
      
        string += "*";
      
    }
    console.log(string);
    cnt++;
    }else{
        cnt++;
    }
}

