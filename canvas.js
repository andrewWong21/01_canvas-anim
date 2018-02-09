var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var pulseButton = document.getElementById("pulse");
var DVDButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");
var requestID;

// code for color-changing function from Stack Overflow
var changeColor = function(){
    var hex = "0123456789ABCDEF";
    var newColor = "#";
    for (var i = 0; i < 6; i++){
        newColor = newColor + hex[Math.floor(Math.random() * 16)];
    };

    return newColor;
}

var pulse = function() {
    window.cancelAnimationFrame(requestID);

    var radius = 0;
    var radiusModifier = 5;
    
    var draw = function() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        radius = radius + radiusModifier;
        if ((radius == 0) || (radius == 250)){
            radiusModifier = radiusModifier * -1;
        };
        console.log("radius " + radius);
        console.log("requestID " + requestID);
        requestID = window.requestAnimationFrame(draw);
    };
    
    draw();
};

var dvd = function() {
    window.cancelAnimationFrame(requestID);
    var speedModifierX = 2;
    var speedModifierY = 2;
    var rectWidth = 200;
    var rectHeight = 80;
    var newX = (Math.random() * (canvas.width-2*rectWidth))+rectWidth;
    var newY = (Math.random() * (canvas.height-2*rectHeight))+rectHeight;
    
    var draw = function() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(newX, newY, rectWidth, rectHeight);
        //ctx.fill();
        //ctx.stroke();
        //ctx.beginPath();
        if ((newX + rectWidth > canvas.width)||(newX < 0)){
            speedModifierX = speedModifierX * -1;
	        ctx.fillStyle = changeColor();
        };
        if ((newY + rectHeight > canvas.height)||(newY < 0)){
            speedModifierY = speedModifierY * -1;
	        ctx.fillStyle = changeColor();
        };
        newX = newX + speedModifierX;
        newY = newY + speedModifierY;
        requestID = window.requestAnimationFrame(draw);

    };
    
    draw();
};

var stop = function() {
    window.cancelAnimationFrame(requestID);
};

var clear = function() {
    ctx.clearRect(0, 0, 800, 600);
};

ctx.fillStyle = "#87ceeb";
canvas.addEventListener("click", stop);
pulseButton.addEventListener("click", pulse);
DVDButton.addEventListener("click", dvd);
stopButton.addEventListener("click", stop);
window.requestAnimationFrame(dvd);
