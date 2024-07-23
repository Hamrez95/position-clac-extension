// script.js
document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculatePosition);
});

function calculatePosition() {
    const totalCapital = parseFloat(document.getElementById('totalCapital').value);
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    const stopLossPercentage = parseFloat(document.getElementById('stopLossPercentage').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
    
    const x = (totalCapital * riskPercentage) / (stopLossPercentage * leverage);
    document.getElementById('result').textContent = `The value of x is: ${x.toFixed(2)}`;
    
}


