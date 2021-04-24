let split1 = document.getElementById('split1');
let split2 = document.getElementById('split2');
let split3 = document.getElementById('split3');
let myRange1 = <HTMLInputElement>document.getElementById('myRange1');
let myRange2 = <HTMLInputElement>document.getElementById('myRange2');
let myRange3 = <HTMLInputElement>document.getElementById('myRange3');



var totalvalue = 100;


(function(){
    function update(){
        var slider1 = parseInt(myRange1.value);
        var slider2 = parseInt(myRange2.value);
        var slider3 = parseInt(myRange3.value);
        slider1 = totalvalue - slider2 - slider3;
        slider2 = totalvalue - slider1 - slider3;
        slider3 = totalvalue - slider2 - slider1;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
        split1.innerHTML = myRange1.value;
        split2.innerHTML = myRange2.value;
        split3.innerHTML = myRange3.value;
    }

    setInterval(update, 1000/15);
})();