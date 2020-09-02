class Shot {

    constructor(x, y,radius) {
        var options = {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,radius,options)  
        this.image = loadImage("polygon1.png");    
        World.add(world, this.body);
        
      }
     display(){
      var pos = this.body.position
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      imageMode(CENTER)
     // fill ("cyan");
       image(this.image,0,0,50,50);
     pop ();

     }

  }