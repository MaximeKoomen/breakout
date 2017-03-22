var breakout = document.getElementById('breakout');
var pen = breakout.getContext('2d');
var peddleX = 250;

function drawPaddle(){
  pen.beginPath();
  pen.rect(205,400,60,15);
  pen.fillStyle="white";
  pen.fill();
  pen.strokeStyle = "white";
  pen.stroke();
}

function drawBall(){
  pen.beginPath();
  pen.arc(235,290,7,0,2*Math.PI);
  pen.fill();
  pen.fillStyle="white";
  pen.stroke();
}

function drawBricks(brickX, brickY){
pen.rect(brickX, brickY, 55, 20);
pen.strokeStyle="white";
pen.fill();
pen.fillStyle="white";
pen.stroke();
}

function showBricks(){
  var x = 0;
  var y = 0;
  for(var i = 0; i < 48; i++){
    drawBricks(x, y);
    x = x + 60;
    if (x >= 450){
      x = 0;
      y = y + 25;
    }
  }
}
function movePeddle(direction){
  if (direction === 'left'){
    if (peddleX <= 30){
      peddleX = peddleX + 10;
    }
    pen.clearRect(205,400,60,15);
  }
  if(direction === 'right'){
    if (peddleX >= 10){
      peddleX = peddleX - 10;
    }
    pen.clearRect(205,400,60,15);
  }
  drawPaddle(peddleX);

}
function keyboardControl(){
  document.addEventListener('keydown', function(event){
    if (event.keyCode === 37 || event.keyCode === 65){
      movePeddle('left');
    }
    else if(event.keyCode === 39 || event.keyCode === 68){
      movePeddle('right');
    }
  });
}
  showBricks();
  drawBall();
  drawBricks();
  movePeddle();
  keyboardControl();
