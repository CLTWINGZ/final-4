const { calculateTax } = require('../src/tax-calculator');

describe('Tax Calculator Logic', () => {
    it('should return 0 for income <= 0', () => {
        expect(calculateTax(0)).toBe(0);
        expect(calculateTax(-5000)).toBe(0);
    });

    it('should calculate 0% tax for income up to 10,000', () => {
        expect(calculateTax(10000)).toBe(0);
        expect(calculateTax(5000)).toBe(0);
    });

    it('should calculate 10% tax for income between 10,001 and 50,000', () => {
        // (20000 - 10000) * 0.10 = 1000
        expect(calculateTax(20000)).toBe(1000);
        // (50000 - 10000) * 0.10 = 4000
        expect(calculateTax(50000)).toBe(4000);
    });

    it('should calculate 20% tax for income between 50,001 and 100,000', () => {
        // 4000 (previous) + (75000 - 50000) * 0.20 = 4000 + 5000 = 9000
        expect(calculateTax(75000)).toBe(9000);
        // 4000 (previous) + (100000 - 50000) * 0.20 = 4000 + 10000 = 14000
        expect(calculateTax(100000)).toBe(14000);
    });

    it('should calculate 30% tax for income above 100,000', () => {
        // 14000 (previous) + (150000 - 100000) * 0.30 = 14000 + 15000 = 29000
        expect(calculateTax(150000)).toBe(29000);
    });

    it('should calculate tax correctly for a typical middle-class income ($60,000)', () => {
        // 4000 (up to 50k) + (60000 - 50000) * 0.20 = 4000 + 2000 = 6000
        expect(calculateTax(60000)).toBe(6000);
    });

    it('should calculate tax correctly for very high income ($1,000,000)', () => {
        // 14000 (up to 100k) + (1000000 - 100000) * 0.30 = 14000 + 270000 = 284000
        expect(calculateTax(1000000)).toBe(284000);
    });
});
