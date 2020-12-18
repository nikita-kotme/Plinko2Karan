var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

//var turn;
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var gameState="play";


var divisionHeight=300;
var score =0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  //mousePressed();
  
  textSize(20)
 text("Score : "+score,20,30);
  
 
  
   //for (var i = 0; i < plinkos.length; i++) {
     
     //plinkos[i].display();
     
   //}
   text("500",26,600)
   text("500",106,600)
   text("500",186,600)
   text("500",266,600)
   text("100",346,600)
   text("100",426,600)
   text("100",506,600)
   text("200",586,600)
   text("200",666,600)
   text("200",746,600)
   text("200",806,600)
   Engine.update(engine);
   ground.display();

   if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}

  
  
   //if(particle!==null){
   // particle.display();
    //if(particle.body.position.y>760){
    //  if(particle.body.position.x<300){
      //  score=score+500;
       // particle=null;
       // if(count>=5) gameState="end";
     // }
   // }
 // }
 
  function mousePressed(){
    if(gameState!=="end")
    {
    
      count++;
      particle=new Particle(mouseX,10,10);
    }
}