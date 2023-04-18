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

window.onload = function() {

    let button = document.getElementById('submitCurrency');
    let input = document.getElementById('currency');
    let answer = document.getElementById('answer');

    button.addEventListener("click", function() {
        event.preventDefault();
        let currencyObj = new CurrencyConversion(input.value);
        answer.innerHTML = currencyObj.calcNewCurrency();
    });
}