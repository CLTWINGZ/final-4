document.getElementById('calculateBtn').addEventListener('click', function() {
    const incomeInput = document.getElementById('income');
    const income = parseFloat(incomeInput.value);

    if (isNaN(income) || income < 0) {
        alert('Please enter a valid positive number for income.');
        return;
    }

    const tax = calculateTaxUI(income);
    const net = income - tax;
    const rate = (income > 0) ? (tax / income) * 100 : 0;

    document.getElementById('taxValue').textContent = '$' + tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('rateValue').textContent = rate.toFixed(2) + '%';
    document.getElementById('netValue').textContent = '$' + net.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    document.getElementById('resultContainer').classList.remove('hidden');
});

/**
 * Duplicate logic for client-side (matching src/tax-calculator.js)
 */
function calculateTaxUI(income) {
    if (income <= 0) return 0;

    let tax = 0;
    let tempIncome = income;
    
    if (tempIncome > 100000) {
        tax += (tempIncome - 100000) * 0.30;
        tempIncome = 100000;
    }
    if (tempIncome > 50000) {
        tax += (tempIncome - 50000) * 0.20;
        tempIncome = 50000;
    }
    if (tempIncome > 10000) {
        tax += (tempIncome - 10000) * 0.10;
    }

    return Math.round(tax * 100) / 100;
}
