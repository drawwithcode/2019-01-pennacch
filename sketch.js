function preload(){
  // put preload code here
}

function setup() {
  angleMode(DEGREES);
//  noCursor();
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(10);
  background(0);



}

function draw() {
  from = color("yellow");
  to = color("red");

  strokeWeight(1.5);
  if (frameCount < 90) {
    stroke(lerpColor(from, to, frameCount/90))
    };
  if (frameCount > 90) {
    stroke(lerpColor(to, from, (frameCount-90)/90))
    };
  if (frameCount < 181) {
  line(
    width/2,
    height/2 + 150,
    width/2 - 150*cos(90 - frameCount*2),
    height/2 +150*sin(90 - frameCount*2)
  );

  line(width/5-100*cos(10*frameCount),height/2+100*sin(10*frameCount),width/5-100*cos(11*frameCount),height/2+100*sin(11*frameCount));
  line(width/5*4-100*cos(10*frameCount),height/2+100*sin(10*frameCount),width/5*4-100*cos(11*frameCount),height/2+100*sin(11*frameCount)) };

  let pippo = 33;
  if(frameCount>60) {pippo=66};
  if (frameCount>120) {pippo=100};
  print( "frame n " + frameCount);

  if (frameCount <187) {line(width/2 -300*cos(10*frameCount),height/2+300*sin(10*frameCount),width/2 - 300*cos(10.5*frameCount), height/2 +300*sin(10.5*frameCount))};

  if (frameCount==180) {noFill(); circle(width/2,height/2,600); circle(width/2,height/2, 300);};



  if (frameCount > 187 & frameCount <285) {
    stroke(255);
    strokeWeight(2);
    line(width/2 - 300*cos(2*frameCount-99), height/2 +300*sin(2*frameCount-99), width/2 + 300*cos(2*frameCount-99), height/2 + 300*sin(2*frameCount-99) );
  }
  if (frameCount == 285) {
    fill(255);
    stroke(255);
    circle(width/2, height/2, 600);
  }
  if (frameCount> 285) {
    stroke(0);
    strokeWeight(2);
    line(
      width/2,
      height/2 + 300,
      width/2 - 300*cos(90 - (frameCount-285)*2),
      height/2 +300*sin(90 - (frameCount-285)*2)
    );}




  if (frameCount ==480) {  noLoop();  }


}
