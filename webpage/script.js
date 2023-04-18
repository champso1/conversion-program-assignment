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

let TimeConversion = function(hour, min, sec) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
    this.zones = {
        "EST": 0,
        "CDT": 1,
        "MDT": 2,
        "PDT": 2,
        "AKDT": 3,
        "HST": 4
    };
    this.calcNewTime = function() {
        document.getElementById('time').innerHTML = "";
        let initialZones = document.getElementById('initialZone');
        let finalZones = document.getElementById('finalZone');
        let initialZone; let finalZone;
        
        for (let i=0; i<initialZones.options.length; i++) { //initial and final zone lists are the same
            if (initialZones.options[i].selected==true)
                initialZone = initialZones.options[i].value;
            if (finalZones.options[i].selected==true)
                finalZone = finalZones.options[i].value;
        };
        this.difference = this.zones[finalZone] - this.zones[initialZone];
        this.hour -= this.difference;
        if (this.hour < 0) this.hour += 24;
        if (this.hour > 23) this.hour -= 24;
        let time = "";
        [this.hour, this.min, this.sec].forEach(num => {
            if (num < 9) num = `0${num}`;
            time += `${num}:`;
        });
        time = time.slice(0, -1); time += ` ${finalZone}`;
        document.getElementById('time').innerHTML = time;
    };
};



window.onload = function() {

    let buttons = document.getElementsByName('submit');
    let inputs = document.getElementsByName('input');
    let answers = document.getElementsByName('answer');
    let path = window.location.pathname;
    let page = path.split("/").pop();

    if (page == "time.html") {
        document.getElementById('submitTime').addEventListener("click", function() {
            event.preventDefault();
            let h = document.getElementById('hInput').value;
            let m = document.getElementById('mInput').value;
            let s = document.getElementById('sInput').value;
    
            let time = new TimeConversion(h, m, s);
            time.calcNewTime();
        });
    } else {
        //everything except time conversion, time one is handled differently, below this
        for (let i=0; i<buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                event.preventDefault();
                if (inputs[i].id == "currency") {
                    let currencyObj = new CurrencyConversion(inputs[i].value);
                    answers[i].innerHTML = currencyObj.calcNewCurrency();
                } else if (inputs[i].id == "weight") {
                    let weightObj = new WeightConversion(inputs[i].value);
                    answers[i].innerHTML = weightObj.calcNewWeight();
                } else if (inputs[i].id == "temperature") {
                    let tempObj = new TemperatureConversion(inputs[i].value);
                    answers[i].innerHTML = tempObj.calcNewTemp();
                }
            });
        }

    }    

};
