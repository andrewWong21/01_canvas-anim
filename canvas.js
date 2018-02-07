var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var stopButton = document.getElementById("stop");
var requestID;

var animate = function() {
    window.cancelAnimationFrame(requestID);

    var radius = 0;

    var draw = function() {
        ctx.clearRect(0, 0, 700,700);
        ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        radius=radius+2;
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
