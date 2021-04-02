class GROUND{
    constructor(x,y,w,h){
        this.ground = Bodies.rectangle(x,y,w,h);
        this.width = w;
        this.height = h;
        World.add(world,this.ground);

    }

    display(){
        var pos = this.ground.position;
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }

}