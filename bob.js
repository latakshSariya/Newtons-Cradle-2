class Pendulum{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0,
            inertia:Infinity,
        }
        this.body = Bodies.circle(x,y,40,options);
        this.x = x;
        this.y = y;
        World.add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angl
        noStroke();
        fill("black");
        ellipse(pos.x,pos.y,90,90);
    }
}