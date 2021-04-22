(function() {

//input 
//w is 87 uparrow is 38
//s is 83 downarrow is 40
let graphiccontainer = document.getElementById('graphiccontainer');
let barcontainer = document.getElementById('barcontainer');
let plunger = document.getElementById('plunger');
let funnel = document.getElementById('funnel');
let greenbar = document.getElementById('greenbar');
let redbar = document.getElementById('redbar');
var unjamtasksdoneHTML = document.getElementById('unjamtasksdone');
var isdown = false;
var greenbarvalue = 1;
var redbarvalue = 100;
var unjamtasksdone = 0;

function update(){
    greenbarvalue -= 1;
    greenbar.style.width = greenbarvalue + "px";
    redbar.style.width = redbarvalue - greenbarvalue + "px";
    
}

function unjamjam(i) {
    var x = i.code;
    
    console.log(x);
    if (isdown == false && x == "KeyS" || isdown == false && x == "ArrowDown"){//position is up and you have to press down   
        isdown = true;
        funnel.style.marginTop = "-60px";
        graphiccontainer.style.marginTop ="10px";
        greenbarvalue += 10
        greenbar.style.width = greenbarvalue + "px";
        redbar.style.width = redbarvalue - greenbarvalue + "px";
        console.log(greenbar.style.width);
        if (greenbarvalue >= 100){
            greenbarvalue = 1;
            redbarvalue = 99;
            unjamtasksdone += 1;
            unjamtasksdoneHTML.innerHTML = unjamtasksdone.toString();
        }
        else if (greenbarvalue <= 0){
            greenbarvalue = 1;
            redbarvalue = 100;
        }
    }
    else if(isdown == true && x == "KeyW" || isdown == true && x == "ArrowUp"){//position is down and you have to press up
        isdown = false;
        funnel.style.marginTop = "-50px";
        graphiccontainer.style.marginTop ="-10px";
    }
    console.log(unjamtasksdone)
    
  }
setInterval(update, 1000/15);
document.addEventListener('keydown', unjamjam);
})();