class paper{
    constructor(x,y,width,height)
    {
        var options= {
        isStatic:false,
        restitution:1,
        friction:0.5,
        density:1,

        }
        this.width=width;
        this.height=height;
       
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("paper.png")
        World .add(world,this.body)
}

display()
{
    var paperpos= this.body.position;
     push()
     translate(paperpos.x,paperpos.y)
     rectMode(CENTER)
     strokeWeight(3)
     fill(255)
     imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    // ellipse(0,0,this.r,this.r)
     pop()
}
}


