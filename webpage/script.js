let WeightConversion = function(weight) {
    this.weight = weight;
    this.calcNewWeight = function() {
        if (document.getElementById('KGtoLBS').checked) {
            let newWeight = Math.round((this.weight * 2.2) * 100) /100;
            return `${newWeight} lbs`;
        }
        if (document.getElementById('LBStoKG').checked) {
            let newWeight = Math.round((this.weight / 2.2) * 100) /100;
            return `${newWeight} kg`;
        }
        return "Select an option";
    };
};

let CurrencyConversion = function(currency) {
    this.currency = currency;
    this.calcNewCurrency = function() {
        if (document.getElementById('EtoD').checked) {
            let newCurrency = Math.round((this.currency * 1.1) * 100) / 100;
            return `\$${newCurrency}`;
        } else if (document.getElementById('DtoE').checked) {
            let newCurrency = Math.round((this.currency / 1.1) * 100) / 100;
            return `\u20AC${newCurrency}`; //\u20AC is euro symbol
        }
        return "Select an option";
    };
};


let TemperatureConversion = function(temp) {
    this.temp = temp;
    this.calcNewTemp = function() {
        if (document.getElementById('CtoF').checked) {
            let newTemp = Math.round(((this.temp * 9/5) + 32) * 100) / 100;
            return `${newTemp} \u00B0F`;
        } else if (document.getElementById('FtoC').checked) {
            let newTemp = Math.round(((this.temp - 32) * 5/9) * 100) / 100;
            return `${newTemp} \u00B0C`; //\u20AC is euro symbol
        }
        return "Select an option";
    };
};




window.onload = function() {

    let buttons = document.getElementsByName('submit');
    let inputs = document.getElementsByName('input');
    let answers = document.getElementsByName('answer');

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            event.preventDefault();
            alert(buttons[i].id);
            if (inputs[i].id == "currency") {
                let currencyObj = new CurrencyConversion(inputs[i].value);
                answers[i].innerHTML = currencyObj.calcNewCurrency();
            } else if (inputs[i].id = "weight") {
                let weightObj = new WeightConversion(inputs[i].value);
                answers[i].innerHTML = weightObj.calcNewWeight();
            } else if (inputs[i].id = "temperature") {
                let tempObj = new TemperatureConversion(inputs[i].value);
                answers[i].innerHTML = tempObj.calcNewTemp();
            } //why?!??!?!?

        });
    }

};
