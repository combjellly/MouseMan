/* (Instruction) 


Use the mouse to click the circle bouncing around


(Analysis/artist statement) 


This piece is an interactive art experiment where we able to hang out with a lil circle named Pen. You can do nothing, if you'd like.
Though, it is advised that you spend sometime together. Pen likes to be clicked from time to time. If you notice they are starting to get angry, try to give them space.


(Link)
https://openprocessing.org/sketch/1860193
*/


let y = 0
let x = 0
let anger = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  frameRate(0.5)
}


function draw() {
  background(100);
  fill(anger,0,0)
  x = random(windowWidth)
  y = random(windowHeight)
  circle(x, y, 20);
    if (anger >= 300){
      text("hmm try giving them some space now, too angry", width/2,height/2)
      frameRate(60)
    }
}


function mouseClicked(){
  if (mouseX >= (x-20) && mouseX <= (x+20))
  {
    anger = anger + 40
  }
}


function keyPressed(){
  if (key == " "){
    anger = 0
    frameRate(0.5)
  }
}
