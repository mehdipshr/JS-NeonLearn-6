const _radius = new WeakMap(); 
const _move = new WeakMap(); 

class Circle{
    constructor(radius){
        _radius.set(this,radius) /*weakMap yek method *Set* dare va 2 vorodi dare ! vorodiye aval mishe key ke hamon Objecte
            pas behesh (this) ro midim. va vorodi 2vom value ke hamon parametri ke darayaft mikonim hast ke inja mishe Radius */  
        _move.set(this, () => {
            console.log('move', this);
        })
    }
    draw(){
        _move.get(this)()
        console.log('draw');
    }
}

const c = new Circle(2); 

