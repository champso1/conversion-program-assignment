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

    let button = document.getElementById('submitTemp');
    let input = document.getElementById('temperature');
    let answer = document.getElementById('answer');

    button.addEventListener("click", function() {
        event.preventDefault();
        let tempObj = new TemperatureConversion(input.value);
        answer.innerHTML = tempObj.calcNewTemp();
    });
}