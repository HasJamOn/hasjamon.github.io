//input 
//w is 87 uparrow is 38
//s is 83 downarrow is 40
let container = document.getElementById('container');
let plunger = document.getElementById('plunger');
let funnel = document.getElementById('funnel');
var isdown = false;

function unjamjam(i) {
    var x = i.code;
    
    console.log(x);
    if (isdown == false && x == "KeyS" || isdown == false && x == "ArrowDown"){//position is up and you have to press down   
        isdown = true;
        funnel.style.marginTop = "-60px";
        container.style.marginTop ="10px";
    }
    else if(isdown == true && x == "KeyW" || isdown == true && x == "ArrowUp"){//position is down and you have to press up
        isdown = false;
        funnel.style.marginTop = "-50px";
        container.style.marginTop ="-10px";
    }
    console.log(isdown)
    
  }
document.addEventListener('keydown', unjamjam);