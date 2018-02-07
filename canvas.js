var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var stopButton = document.getElementById("stop");
var requestID;

var animate = function() {
    window.cancelAnimationFrame(requestID);

    var radius = 0;
    var radiusModifier = 1;
    
    var draw = function() {
        ctx.clearRect(0, 0, 800, 800);
        ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        radius = radius + radiusModifier;
        if ((radius == 0) || (radius == 400)){
            radiusModifier = radiusModifier * -1;
        };
        console.log("radius " + radius);
        console.log("requestID " + requestID);
        requestID = window.requestAnimationFrame(draw);
    };
    
    draw();
};

var stop = function() {
    window.cancelAnimationFrame(requestID);
};

ctx.fillStyle = "#008800";
canvas.addEventListener("click", animate);
stopButton.addEventListener("click", stop);
window.requestAnimationFrame(animate);
