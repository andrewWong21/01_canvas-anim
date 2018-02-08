var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var pulseButton = document.getElementById("pulse");
var DVDButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");
var requestID;

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
    var speedModifierX = 3;
    var speedModifierY = 3;
    var radius = 30;
    var newX = (Math.random() * (canvas.width-2*radius))+radius;
    var newY = (Math.random() * (canvas.height-2*radius))+radius;
    
    var draw = function() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.arc(newX, newY, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        if ((newX + radius > canvas.width)||(newX - radius < 0)){
            speedModifierX = speedModifierX * -1;
        };
        if ((newY + radius > canvas.height)||(newY - radius < 0)){
            speedModifierY = speedModifierY * -1;
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
