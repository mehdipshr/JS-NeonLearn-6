const _radius = new WeakMap(); 


class Shape{
    move(){
        consol.log('move')
    }    
}


class Circle extends Shape{
    move(){
        console.log('circle move') ;
    }
}


const c= new Circle('red',2);