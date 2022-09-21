
var mouseEvent = "empty";
var lastPositionX, lastPositionY;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "blue";
widthLine = 1;
canvas.addEventListener("mousedown", myMousedown);


function myMousedown(e)
{
mouseEvent="mouseDown"
}
canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){
PositionMouseX= e.clientX - canvas.offsetLeft;
PositionMouseY= e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx. lineWidth = widthLine;
ctx.moveTo(lastPositionX, lastPositionY);
ctx.lineTo(PositionMouseX, PositionMouseY);
ctx.stroke();

}
lastPositionX = PositionMouseX
lastPositionY = PositionMouseY


}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseLeave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseLeave";
}










