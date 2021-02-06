class Dustbin{
    constructor(x,y){
       
 	
	this.x=x
	this.y=y
	this.width=200
	this.height=100
	this.thickness=20
	

 
 	this.boxLeftBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness,this.height, {isStatic:true} );
 	World.add(world, this.boxLeftBody);


 	this.boxBottomBody = Bodies.rectangle(this.x, this.y, this.width,this.thickness , {isStatic:true} );
 	World.add(world,this.boxBottomBody);

 
    this. boxRightBody = Bodies.rectangle(this.x+this.width/2 , this.y-this.height/2, this.thickness,this.height , {isStatic:true} );
 	World.add(world, this.boxRightBody);
	}
	display(){
		var pos1=this.boxLeftBody.position;
		var pos2=this.boxBottomBody.position
		var pos3=this. boxRightBody.position

        push()
        translate(pos1.x, pos1.y);
        rectMode(CENTER)
        noStroke()
        fill(255,0,255)
        rect(0,0,this.thickness,this.height);
		pop ()
		
		push()
        translate(pos2.x, pos2.y);
        rectMode(CENTER)
        noStroke()
        fill(255,0,255)
        rect(0,0,this.width,this.thickness);
		pop ()
		
		push()
        translate(pos3.x, pos3.y);
        rectMode(CENTER)
       noStroke()
        fill(255,0,255)
        rect(0,0,this.thickness,this.height);
        pop ()


		

	}

}
