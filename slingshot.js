class slingshot{
    constructor(a, b){
        var options ={
            a: a,
            b: b,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = constraint.create(options);
        
        World.add(world, this.slingshot);
    }
    display(){
        var pointA = this.slingshot.a.position;
        var pointB = this.slingshot.b.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}