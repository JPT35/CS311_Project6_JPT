
/* Function for displaying/hiding content within containers */

document.addEventListener('DOMContentLoaded', function() {
    var addAssets = document.getElementById('AddAssets');
    var AssetsContainer = document.querySelector('.AddAssets-container');

    var addLiabilities = document.getElementById('AddLiabilities');
    var LiabilitiesContainer = document.querySelector('.AddLiabilities-container');

    var addInvestments = document.getElementById('AddInvestments');
    var InvestmentsContainer = document.querySelector('.AddInvestments-container');

    var addLongTerm = document.getElementById('AddLongTerm');
    var LongTermContainer = document.querySelector('.AddLongTerm-container');

    var addIntangibles = document.getElementById('AddIntangibles');
    var IntangiblesContainer = document.querySelector('.AddIntangibles-container');

    addAssets.addEventListener('click', function() {
        AssetsContainer.style.display = 'block'; 
        addAssets.style.display = 'none';
    });

    addLiabilities.addEventListener('click', function() {
        LiabilitiesContainer.style.display = 'block'; 
        addLiabilities.style.display = 'none';
    });

    addInvestments.addEventListener('click', function() {
        InvestmentsContainer.style.display = 'block';
        addInvestments.style.display = 'none';
    });

    addLongTerm.addEventListener('click', function() {
        LongTermContainer.style.display = 'block';
        addLongTerm.style.display = 'none';
    });

    addIntangibles.addEventListener('click', function() {
        IntangiblesContainer.style.display = 'block';
        addIntangibles.style.display = 'none';
    });
});

/* Funtion for dynamic display inputs and totals */ 
document.addEventListener('DOMContentLoaded', function() {

    var inputAssets = document.querySelectorAll('.assets-input');
    var outputAssets = document.getElementById('assetsOutput');

    var inputLiabilities = document.querySelectorAll('.liability-input');
    var outputLiabilities = document.getElementById('totalLiabilities');

    var inputInv = document.querySelectorAll('.inv-input');
    var outputInv = document.getElementById('InvOutput');

    var inputLongTerm = document.querySelectorAll('.longterm-input');
    var outputLongTerm = document.getElementById('longtermLiabilities');

    var inputInt = document.querySelectorAll('.int-input');
    var outputInt = document.getElementById('IntOutput');

    


    inputAssets.forEach(function(input) {
        input.addEventListener('input', function() {
            var sum = 0;
            inputAssets.forEach(function(input) {
                var value = parseFloat(input.value) || 0;
                sum += value;
            });
            outputAssets.textContent = sum.toFixed(2); 
        });
    });

    inputLiabilities.forEach(function(input) {
        input.addEventListener('input', function() {
            var sum = 0;
            inputLiabilities.forEach(function(input) {
                var value = parseFloat(input.value) || 0;
                sum += value;
            });
            outputLiabilities.textContent = sum.toFixed(2); 
        });
    });


    inputInv.forEach(function(input) {
        input.addEventListener('input', function() {
            var sum = 0;
            inputInv.forEach(function(input) {
                var value = parseFloat(input.value) || 0;
                sum += value;
            });
            outputInv.textContent = sum.toFixed(2); 
        });
    });

    inputLongTerm.forEach(function(input) {
        input.addEventListener('input', function() {
            var sum = 0;
            inputLongTerm.forEach(function(input) {
                var value = parseFloat(input.value) || 0;
                sum += value;
            });
            outputLongTerm.textContent = sum.toFixed(2); 
        });
    });

    inputInt.forEach(function(input) {
        input.addEventListener('input', function() {
            var sum = 0;
            inputInt.forEach(function(input) {
                var value = parseFloat(input.value) || 0;
                sum += value;
            });
            outputInt.textContent = sum.toFixed(2); 
        });
    });

});

/* Function for click of position button, adding totals and subtracting liabilities from assets */

document.addEventListener('DOMContentLoaded', function() {

    var CalculatePosition = document.getElementById('CalculatePosition');
    

    CalculatePosition.addEventListener('click', function() {

        var outputLiabilities = parseFloat(document.getElementById('totalLiabilities').textContent) || 0;
        var outputLongTerm = parseFloat(document.getElementById('longtermLiabilities').textContent) || 0;
        var liabilitiesSum = outputLiabilities + outputLongTerm;

        document.getElementById('output-box-total-liabilities').textContent = liabilitiesSum.toFixed(2);

        var outputAssets = parseFloat(document.getElementById('assetsOutput').textContent) || 0;
        var outputInv = parseFloat(document.getElementById('InvOutput').textContent) || 0;
        var outputInt = parseFloat(document.getElementById('IntOutput').textContent) || 0;
        var assetsSum = outputAssets + outputInv + outputInt;

        document.getElementById('output-box-assets').textContent = assetsSum.toFixed(2);

        document.getElementById('positionOutput').textContent = assetsSum - liabilitiesSum.toFixed(2);
    });
});
