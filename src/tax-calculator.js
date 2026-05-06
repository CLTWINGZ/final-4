/**
 * Calculates the tax based on income using simplified progressive brackets.
 * @param {number} income - The total annual income.
 * @returns {number} - The calculated tax amount.
 */
function calculateTax(income) {
    if (income <= 0) return 0;

    let tax = 0;
    
    // Brackets:
    // 0 - 10,000: 0%
    // 10,001 - 50,000: 10%
    // 50,001 - 100,000: 20%
    // Above 100,000: 30%

    if (income > 100000) {
        tax += (income - 100000) * 0.30;
        income = 100000;
    }
    if (income > 50000) {
        tax += (income - 50000) * 0.20;
        income = 50000;
    }
    if (income > 10000) {
        tax += (income - 10000) * 0.10;
    }

    return Math.round(tax * 100) / 100;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateTax };
}
