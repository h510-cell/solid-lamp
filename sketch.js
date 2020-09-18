var canvas;
var painterCount;
var allpainters;
var gameState=0;
var database;

var form,painter,paint;

var drawing = [];
var currentPath = [];

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    canvas.mousePressed(startPath)
  //  canvas.mouseReleased(endPath)
    database=firebase.database();
}

function startPath(){
  currentPath = [];
  drawing.push(currentPath)
}

//function endPath(){
//}

function draw(){
    background(0)
    if (painterCount===1){
    }
   if(mouseIsPressed){
    var points = {
      x: mouseX,
      y: mouseY
    }
     currentPath.push(points)
   }
    
   
   stroke(255);
   strokeWeight(4);
   noFill();
    for(var i=0;i <drawing.length;i++){
      var path = drawing[i];
      beginShape();
      for(var j=0;j <path.length;j++){
        vertex(path[j].x,path[j].y)
    }
    endShape();
  }
    
}