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
let unjamtasksdoneHTML = document.getElementById('unjamtasksdone');
let jamportalcontainer = document.getElementById('jamportalcontainer');
var isdown = false;
var greenbarvalue = 3;
let redbarvalue = 100;
var unjamtasksdone = 0;
var bardecreaserate = 1;

function update(){
    greenbarvalue -= bardecreaserate;
    greenbar.style.width = greenbarvalue + "px";
    redbar.style.width = redbarvalue - greenbarvalue + "px";
    console.log("green: " + greenbarvalue)
    console.log("red: " + redbarvalue)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function unjamjam(i) {
    var x = i.code;
    
    console.log(x);
    if (isdown == false && x == "KeyS" || isdown == false && x == "ArrowDown"){//position is up and you have to press down   
        
        if(unjamtasksdone >= 5 && unjamtasksdone < 10){
            if (greenbarvalue < 1){
                greenbarvalue = 1;
            }
            bardecreaserate = greenbarvalue / 10;
            if(greenbarvalue <= 2){
                console.log("Plunger lost animation and dialogue triggered!");
                greenbarvalue = 3;
                unjamtasksdone += 1;
                unjamtasksdoneHTML.innerHTML = unjamtasksdone.toString();
                //go to next task (mini-game)
            }
        }
        else if(unjamtasksdone == 10){
            bardecreaserate = 0; //pause
            console.log("Easter Egg: Choose *Endless mode* or throw yourself into the jam portal?");
        }

        isdown = true;
        funnel.style.marginTop = "-60px";
        graphiccontainer.style.marginTop ="10px";
        greenbarvalue += 10
        greenbar.style.width = greenbarvalue + "px";
        redbar.style.width = redbarvalue - greenbarvalue + "px";
        
        if (greenbarvalue >= 100){
            bardecreaserate = getRndInteger(1,2); //randomizes the rate every round
            greenbarvalue = 4;
            unjamtasksdone += 1;
            unjamtasksdoneHTML.innerHTML = unjamtasksdone.toString();
            //go to next task (mini-game)
        }
        else if (greenbarvalue <= 1){
            greenbarvalue = 3;
        }

        
    }
    else if(unjamtasksdone >= 5 && unjamtasksdone < 10 && x == "KeyS" || unjamtasksdone >= 5 && unjamtasksdone < 10 &&  x == "ArrowDown"){
            console.log("You fall into the jam portal");
            jamportalcontainer.style.display ="flex";
    }
    else if(isdown == true && x == "KeyW" || isdown == true && x == "ArrowUp"){//position is down and you have to press up
            isdown = false;
            funnel.style.marginTop = "-50px";
            graphiccontainer.style.marginTop ="-10px";
    }
    
  }
setInterval(update, 1000/15);
document.addEventListener('keydown', unjamjam);
})();