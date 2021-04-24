let split1 = document.getElementById('split1');
let split2 = document.getElementById('split2');
let split3 = document.getElementById('split3');
let myRange1 = document.getElementById('myRange1');
let myRange2 = document.getElementById('myRange2');
let myRange3 = document.getElementById('myRange3');
let defaultchoicechosen = document.getElementById('defaultchoicechosen');
let charitychoicechosen = document.getElementById('charitychoicechosen');
var slider1 = parseFloat(myRange1.value);
var slider2 = parseFloat(myRange2.value);
var slider3 = parseFloat(myRange3.value);
var totalvalue = 100;
function onInput1() {
    if (slider1 < parseFloat(myRange1.value)) {
        if (slider2 <= 0) {
            slider3 -= 1;
        }
        else if (slider3 <= 0) {
            slider2 -= 1;
        }
        else {
            slider2 -= 0.5;
            slider3 -= 0.5;
        }
        slider1++;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    else if (slider1 > parseFloat(myRange1.value)) {
        slider2 += 0.5;
        slider3 += 0.5;
        slider1--;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    split1.innerHTML = myRange1.value;
    split2.innerHTML = myRange2.value;
    split3.innerHTML = myRange3.value;
}
function onInput2() {
    if (slider2 < parseFloat(myRange2.value)) {
        if (slider1 <= 0) {
            slider3 -= 1;
        }
        else if (slider3 <= 0) {
            slider1 -= 1;
        }
        else {
            slider1 -= 0.5;
            slider3 -= 0.5;
        }
        slider2++;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    else if (slider2 > parseFloat(myRange2.value)) {
        slider1 += 0.5;
        slider3 += 0.5;
        slider2--;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    split1.innerHTML = myRange1.value;
    split2.innerHTML = myRange2.value;
    split3.innerHTML = myRange3.value;
}
function onInput3() {
    if (slider3 < parseFloat(myRange3.value)) {
        if (slider2 <= 0) {
            slider1 -= 1;
        }
        else if (slider1 <= 0) {
            slider2 -= 1;
        }
        else {
            slider2 -= 0.5;
            slider1 -= 0.5;
        }
        slider3++;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    else if (slider3 > parseFloat(myRange3.value)) {
        slider2 += 0.5;
        slider1 += 0.5;
        slider3--;
        myRange1.value = slider1.toString();
        myRange2.value = slider2.toString();
        myRange3.value = slider3.toString();
    }
    split1.innerHTML = myRange1.value;
    split2.innerHTML = myRange2.value;
    split3.innerHTML = myRange3.value;
}
function defaultChoice() {
    charitychoicechosen.style.display = "none";
    defaultchoicechosen.style.display = "block";
}
function charityChoice() {
    charitychoicechosen.style.display = "block";
    defaultchoicechosen.style.display = "none";
}
