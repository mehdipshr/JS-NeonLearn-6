// 'use strict'  

// const Circle = function(){
//     this.draw = function(){
//         console.log(this);
//     }
// }

// const  c = new Circle();
// method call
// c.draw();

//const draw = c.draw.bind(c); // forgot!! bind ro pak kon va (draw) dar consol mororgar seda bezan 
// c.draw.bind  : (bind) inja miyad va object Circle ro motasel mikone be const Draw ! 
// agar az ( bind ) estefade nakonim Const Draw undifinde bargasht dade mishe baraye jelogiri az taghir this biron az object 


// function call
// draw();





class Circle {
    draw(){
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();

