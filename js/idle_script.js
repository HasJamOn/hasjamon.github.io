"use strict";
//<editor-fold defaultstate="collapsed" desc="devdisplay">
//<editor-fold defaultstate="collapsed" desc="devdisplay var">
let devbutton = document.getElementById('devbutton');
let devresetjam = document.getElementById('devresetjam');
let devdisplay = document.getElementById('devdisplay');
devdisplay.style.display = 'none';
let jamTxt = document.getElementById('jamTxt');
let businesstotalTxt = document.getElementById('businesstotalTxt');
let incometotalTxt = document.getElementById('incometotalTxt');
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="devdisplay buttons">
devbutton.onclick = function () {
    if (document.getElementById('devdisplay').style.display == 'none') {
        document.getElementById('devdisplay').style.display = '';
    }
    else {
        document.getElementById('devdisplay').style.display = 'none';
    }
};
devresetjam.onclick = function () {
    jam = 0;
};
//</editor-fold>
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="gamedisplay">
let vsrrate = 10; //visual reduction of boxes
let idlebox_income = document.getElementById('idlebox_income');
let idlebox_wallet = document.getElementById('idlebox_wallet');
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="idle-engine">
//<editor-fold defaultstate="collapsed" desc="idle-engine var">
var jam = 2;
var businesstotal = 0;
var incometotal = 0;
var business = ["Food", "god", "why", "anotherone"];
var businessAmount = new Array();
var businessIncome = new Array(); //indivdual business income for devdisplay
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="idle-engine function">
function update() {
    for (var i = 0; i < business.length; i++) {
        jam += businessAmount[i] * ((i + 1) * (i + 1));
        businessIncome[i] = businessAmount[i] * ((i + 1) * (i + 1));
    }
    jamTxt.innerHTML = jam.toString();
    idlebox_wallet.style.width = jam / vsrrate + 'px';
    idlebox_wallet.style.height = jam / vsrrate + 'px';
}
function setBusiness() {
    for (var i = 0; i < business.length; i++) {
        businessAmount.push(0);
        businessIncome.push(0);
        var div = document.createElement('div');
        div.id = business[i];
        div.innerHTML = business[i];
        var amount = document.createElement('span');
        amount.id = "amount" + i;
        amount.innerHTML = "Amount:0";
        var cost = document.createElement('span');
        cost.id = "cost" + i;
        cost.innerHTML = "DKK" + businessCost(i);
        var income = document.createElement('span');
        income.id = "income" + i;
        income.innerHTML = "income" + businessIncome[i];
        var button = document.createElement('input');
        button.type = "button";
        button.id = i.toString();
        button.value = 'buy';
        button.onclick = buyBusiness;
        div.appendChild(amount);
        div.appendChild(cost);
        div.appendChild(income);
        div.appendChild(button);
        devdisplay.appendChild(div);
    }
}
function buyBusiness() {
    if (jam >= businessCost(this.id)) {
        jam -= businessCost(this.id);
        businessAmount[this.id]++;
        businessIncome[this.id]++;
        document.getElementById("amount" + this.id).innerHTML = businessAmount[this.id];
        document.getElementById("income" + this.id).innerHTML = businessIncome[this.id];
        //<editor-fold defaultstate="collapsed" desc="gamedisplay stats">
        idlebox_income.style.width = incometotal / vsrrate + 'px';
        idlebox_income.style.height = incometotal / vsrrate + 'px';
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="devdisplay stats">
        businesstotal = businessAmount.reduce(function (a, b) {
            return a + b;
        });
        incometotal = businessAmount.reduce(function (a, b, i) {
            return a + b * (i + 1) * (i + 1);
        });
        for (var i = 0; i < business.length; i++) {
            businessIncome[i] = businessAmount[i] * ((i + 1) * (i + 1));
        }
        businesstotalTxt.innerHTML = businesstotal.toString();
        ;
        incometotalTxt.innerHTML = incometotal.toString();
        ;
        //console.log(businessAmount, businessIncome); // shows the difference between owned business and the income it brings
        //</editor-fold>
    }
    document.getElementById("amount" + this.id).innerHTML = "Amount:" + businessAmount[this.id];
    document.getElementById("cost" + this.id).innerHTML = "DKK" + businessCost(this.id);
    console.log(this.id, businessCost(this.id), businessAmount[this.id]);
    document.getElementById("income" + this.id).innerHTML = "income:" + businessIncome[this.id];
}
function businessCost(id) {
    var intid = parseInt(id);
    return (intid + 2) * (intid + 1) * (intid + 1) * (businessAmount[intid] + 1);
}
setBusiness();
setInterval(update, 1000 / 15);
