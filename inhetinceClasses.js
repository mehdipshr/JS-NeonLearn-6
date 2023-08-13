const _radius = new WeakMap(); 


class Shape{
    constructor(color){
        this.color = color;
    }
    move(color){
        console.log('move');
    }
}

class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }
}
const c= new Circle('red',2);