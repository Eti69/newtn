class Circle{
    constructor(x,y,radius){
    var options={
    'restitution':1.3,
    'friction':5,
    'density':1
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius,
    this.x=x,
    this.y=y,
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER)
    strokeWeight(5);
    stroke('black');
    fill('red');
    ellipse(0,0,this.radius,this.radius)
    pop();
    
    }
    
    }