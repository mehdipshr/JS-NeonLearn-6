const _radius = Symbol(); // 
const _draw = Symbol();

class Circle{
    constructor(radius){
        //this._radius = radius;  /*gahi vaghta in Underlin ro (_radius)ghabl az property ha mibinim!! be in manzor hast ke be am codenevis ha be ma began in yek property private hast.  */
        this[_radius] = radius; 
    }
    [_draw](){
        console.log(_draw);
    }
}

const c = new Circle(2); 

console.log(Symbol() === Symbol() );// in khat false return mikone!! be dalile in ke har bar yek value unike barmigardone