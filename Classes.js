

class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){ /* agar bekhahim function ya methodemon darone object bashe be in sorat ghararesh midim va hich moshkeli ham pish nemiyad */
            console.log('move');

        }
    }
    draw(){ /* ba gharar dadane method biron az constructor method automatic mire va darone prototype gharar migire */ 
        console.log('draw');
    }
}

const c = new Circle(10)