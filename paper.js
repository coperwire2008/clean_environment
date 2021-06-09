class paper{
    constructor(x,y,r){
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("orange");
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}