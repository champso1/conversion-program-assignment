let TimeConversion = function(hour, min, sec) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
    this.zones = {
        "EST": 0,
        "CST": 1,
        "MST": 2,
        "PST": 2,
        "AKST": 3,
        "HST": 4
    };
    let EST = ["CT", "DE", "DC", "FL", "GA", "IN", "KY", "ME", "MD", "MA", "MI", "NH", "NJ", "NY", "NC", "OH", "PA", "RI", "SC", "TN", "VT", "VA", "WA"];
    let CST = ["AL", "AR", "IL", "IA", "LA", "MN", "MO", "MS", "NE","ND", "OK", "SD", "TX", "WI"];
    let MST = ["AZ", "CO", "ID", "MT", "NM", "UT", "WY"];
    let PST = ["CA", "NV", "OR", "WA"];
    let AKST = ["AK"];
    let HST = ["HI"];
    let zones = [EST, "EST", CST, "CST", MST, "MST", PST, "PST", AKST, "AKST", HST, "HST"];

    this.calcNewTime = function() {
        document.getElementById('time').innerHTML = "";
        let initialStates = document.getElementById('initialStates');
        let finalStates = document.getElementById('finalStates');
        let initialState, finalState, initialZone, finalZone;
        
        for (let i=0; i<initialStates.options.length; i++) { //initial and final zone lists are the same
            if (initialStates.options[i].selected==true)
                initialState = initialStates.options[i].value;
            if (finalStates.options[i].selected==true)
                finalState = finalStates.options[i].value;
        };

        for (let i=0; i<zones.length; i+=2) {
            if (zones[i].includes(initialState)) initialZone = zones[i+1];
            if (zones[i].includes(finalState)) finalZone = zones[i+1];
        }

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

    let button = document.getElementById('submitTime');

    button.addEventListener("click", function() {
        event.preventDefault();

        let h = document.getElementById('hInput').value;
        let m = document.getElementById('mInput').value;
        let s = document.getElementById('sInput').value;
    
        let time = new TimeConversion(h, m, s);
        time.calcNewTime();
    });
};