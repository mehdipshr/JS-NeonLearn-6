class Circle{
    constructor(radius){
        this.radius = radius;
    }
    //inctance method
    draw(){  

    }
    //static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
// Circle.parse();

const circle = Circle.parse('{"radius":1}')
