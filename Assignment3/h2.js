

var rectangleclass=function(height,width,color){
    this.height=height,
      this.width=width,
      this.color=color
  };
  

  rectangleclass.prototype.getArea=function(){
      console.log('Area is:'+ (this.width*this.height));
  }

  console.log(rectangleclass.prototype);

  var rect1=new rectangleclass(20,50,'red');
  console.log(rect1);

  var rect2=new rectangleclass(40,60,'red');
  console.log(rect2);

  rect1.getArea();
  rect2.getArea();