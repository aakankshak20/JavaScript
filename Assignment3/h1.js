// var Rectangle = new Object();

// Rectangle.height=200;
// Rectangle.width=400;

// console.log(Rectangle.height);
// console.log(Rectangle.width);

var rectangle_class=function(height,width,color){
  this.height=height,
    this.width=width,
    this.color=color
};

var rectangle1=new rectangle_class(50,100);
console.log(rectangle1);

var rectangle2=new rectangle_class(500,1000,"red");
console.log(rectangle2);

var rectangle3=new rectangle_class(150,300);
console.log(rectangle3);

var rectangle4=new rectangle_class(20,90,"blue");
console.log(rectangle4);
