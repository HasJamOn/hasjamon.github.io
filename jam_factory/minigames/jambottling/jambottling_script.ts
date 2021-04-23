let lever = document.getElementById('lever');
let jamfluidflow = document.getElementById('jamfluidflow');
let bottle = <HTMLImageElement>document.getElementById('bottle')
let dialogbox = <HTMLImageElement>document.getElementById('dialogbox')
let bottledjam = <HTMLImageElement>document.getElementById('bottledjam')

var bottlefillamount = 0;
var funneljammed = false;
var jambottled = 0;

var leverdown = false;




function mouseDown(){
    leverdown = true;
    jamfluidflow.style.display = "inline";
    lever.style.backgroundImage = "url('../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_lever_1-export2.png')";
    dialogbox.textContent = "Filling a bottle..";

}

function mouseUp(){
    leverdown = false;
    jamfluidflow.style.display = "none";
    lever.style.backgroundImage = "url('../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_lever_1-export1.png')";

    
    if(bottlefillamount > 90 && bottlefillamount < 100){
        jambottled++;
        bottledjam.innerHTML += "<img  src='../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle5.png' alt='bottle'/>";
        bottlefillamount = 0;
        bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_emptybottle.png";
        dialogbox.textContent = "You filled a bottle!";
    }
    else if(bottlefillamount > 0 && bottlefillamount < 100){
        dialogbox.textContent = "The bottle isn't full, keep going!";
    }
    
}


(function() {
    function update(){
        if(leverdown == true){
            bottlefillamount++ ;
            console.log(bottlefillamount);
            if(bottlefillamount < 10){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_emptybottle.png";
            }
            else if(bottlefillamount < 30){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle1.png";
            }
            else if(bottlefillamount < 50){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle2.png";
            }
            else if(bottlefillamount < 70){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle3.png";
            }
            else if(bottlefillamount < 90){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle4.png";
            }
            else if(bottlefillamount < 100){
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_filledbottle5.png";
                if(leverdown == true){
                    dialogbox.textContent = "It's full, you can let go now!";
                }
            }
            else if(bottlefillamount == 100){
                mouseUp()
                bottlefillamount = 0;
                bottle.src = "../../art_assets/jamfactory_mockup/jamfactory_assets_mockup/jamfactory_assets_mockup_emptybottle.png";
                dialogbox.textContent = "Oh no! It overflowed, you have to start over.";
            }
            
        }
    }


setInterval(update, 1000/15);


})();