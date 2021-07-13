class particles{
    constructor(x,y){
    var options = {
        restitution: 1,
        friction: 1,
        isStatic:false
    }  
    this.r = 6
    this.body = Bodies.circle(x,y,this.r,options); 
    this.color = color(random(0,225), random(0,255), random(0,255));
    World.add(world,this.body)
    }
    display(){
    var pos =  this.body.position;
    var angle = this.body.angle;
    
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    ImageMode(CENTER)
    noStroke()
    fill("white")
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
    }
}