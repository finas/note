```js
function Shape(x,y){
  this.x = x
  this.y = y
}
Shape.prototype.move = function(x,y){
  this.x += x;
  this.y += y;
}

function Circle(x,y,r){
  Shape.call(this,x,y)
  this.r = r
}
//derive by create for append self function
Circle.prototype = Object.create(Shape.prototype)
Circle.protoype.constructor = Circle

Circle.prototype.area = function(){
  return Math.power(this.r,2)*Math.PI
}

```
