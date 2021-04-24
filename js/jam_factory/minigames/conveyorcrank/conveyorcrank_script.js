let crank = document.getElementById('crank');
var crankgrabbed = false;
var rotation = 0;
function crankDown() {
    crankgrabbed = true;
}
function crankUp() {
    crankgrabbed = false;
}
function crankMove() {
    if (crankgrabbed == true) {
        rotation++;
        if (rotation > 360) {
            rotation = 0;
        }
        crank.style.transform = "rotate(" + rotation + "deg)";
    }
}
