//hoisting in function

// sayGoodBye();
//function Declaration
function sayHello(){
    console.log('hello');
}
//function Expression
const sayGoodBye = function(){
    console.log('goodbye');
}



// Hoisting in class
// natije koli ine ke Hoisting ro baraye  class ha nadrim kolan va farghi ham nadare ke Expression ya Declaration bashe
// const c = new Circle();
const s = new Square();
//class Declaration
class Circle{

}

//class Expression
const Square = class{

}