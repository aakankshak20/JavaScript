

var rectangleclass=function(height,width){
    this.height=height,
      this.width=width
      
  };
  

  rectangleclass.prototype.getArea=function(){
      console.log('Area is:'+ (this.width*this.height));
  }

  console.log(rectangleclass.prototype);

  var rect1=new rectangleclass(4,5);
  console.log(rect1);

//   var rect2=new rectangleclass(40,60);
//   console.log(rect2);

  rect1.getArea();
//   rect2.getArea();