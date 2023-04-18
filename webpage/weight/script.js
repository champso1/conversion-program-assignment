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

window.onload = function() {
    let button = document.getElementById('submitWeight');
    let input = document.getElementById('weight');
    let answer = document.getElementById('answer');

    button.addEventListener("click", function() {
        event.preventDefault();
        let weightObj = new WeightConversion(input.value);
        answer.innerHTML = weightObj.calcNewWeight();
    });

}