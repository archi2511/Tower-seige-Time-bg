class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;

      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
        var pos =this.body.position;
      //console.log(this.body.position);
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("cyan");
      rect(0,0, this.width, this.height);
      pop();
      }
      else{World.remove(world,this.body);
        push ();
        this.Visibility = this.Visibility -5;
        tint (255,this.Visibility);
        console.log(this.Visibility);
        pop ();
      }

      

    }
    score (){
      if(this.Visibility<0 && this.Visibility> -105){
        score++;
      }
    }
  
  };