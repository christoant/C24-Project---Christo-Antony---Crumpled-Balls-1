class Ball{
    constructor(x,y,radius){
        var circ_options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,circ_options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius); 
    }
}
