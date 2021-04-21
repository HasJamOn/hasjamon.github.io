var jam = 2;
let businesstotal = 0;
let income = 0;
var business = ["Food", "Telecom", "Games", "Transport", "Energy", "Politics", "Weapons", "Drugs", "Space Travel", "Time Travel", "Universe Creation", "Multiverse Travel", "Multiverse Weapons", "God Business Stuff", "Much WOW", "Hi reddit"];
var businessAmount = new Array();
let jamTxt = document.getElementById('jamTxt');
let devdisplay = document.getElementById('devdisplay');
let businessTotalTxt = document.getElementById('businessTotalTxt');
let incomeTxt = document.getElementById('incomeTxt');
let idlebox = document.getElementById('idlebox');

function update() {
    for(i = 0; i < business.length; i++) {
        jam += businessAmount[i] * ((i + 1) * (i + 1));
    }
    businesstotal = businessAmount.reduce(function(a, b){
        return a + b;
    });
    income = businessAmount.reduce(function(a, b, i){
        return a + b * (i+1) * (i+1);
    });
  
    jamTxt.innerHTML = jam;
    businessTotalTxt.innerHTML = businesstotal;
    incomeTxt.innerHTML = income;
    idlebox.style.width = income + 'px';
    idlebox.style.height = income + 'px';
}

function setBusiness() {
    for(i = 0 ; i < business.length; i++) {
        businessAmount.push(0);
    
  	var div = document.createElement('div');
        div.id = business[i];
        div.innerHTML = business[i];
    
        var amount = document.createElement('span');
        amount.id = "amount" + i;
        amount.innerHTML = "0";

        var cost = document.createElement('span');
        cost.id = "cost" + i;
        cost.innerHTML = "$" + businessCost(i);

        var button = document.createElement('input');
        button.type = "button";
        button.id = i;
        button.value = 'buy';
        button.onclick = buyBusiness;

        div.appendChild(amount);
        div.appendChild(cost);
        div.appendChild(button);
        devdisplay.appendChild(div);
  }
}

function buyBusiness() {
    console.log("BUY " + this.id);
    if(jam >= businessCost(this.id)) {
        jam -= businessCost(this.id);
        businessAmount[this.id]++;
        document.getElementById("amount" + this.id).innerHTML = businessAmount[this.id];        
      }
  
  document.getElementById("cost" + this.id).innerHTML = "$" + businessCost(this.id);
}

function businessCost(id) {
	return (id + 2) * (id + 1) * (id + 1) * (businessAmount[id] + 1);
}

setBusiness();
for(i = 0 ; i < business.length; i++) {
	 document.getElementById(i).onclick();
}

setInterval(update, 1000/15);