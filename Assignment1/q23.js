function fibbo(num){
    var no1=0;
    var no2=1;
    var i=0;
    var sum=0;
    console.log(no1);
    console.log(no2);
    for(i=0;i<num;i++){
        sum=no1+no2;
        console.log(sum);
        no1=no2;
        no2=sum;

    }
}

fibbo(100);