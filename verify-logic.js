const { calculateTax } = require('./src/tax-calculator');

const testCases = [
    { income: 0, expected: 0 },
    { income: 5000, expected: 0 },
    { income: 10000, expected: 0 },
    { income: 20000, expected: 1000 },
    { income: 50000, expected: 4000 },
    { income: 75000, expected: 9000 },
    { income: 100000, expected: 14000 },
    { income: 150000, expected: 29000 }
];

console.log('--- Verifying Tax Calculation Logic ---');
let passedCount = 0;

testCases.forEach((tc, index) => {
    const result = calculateTax(tc.income);
    const passed = result === tc.expected;
    if (passed) passedCount++;
    console.log(`Test ${index + 1}: Income: ${tc.income.toLocaleString()}, Expected: ${tc.expected}, Got: ${result} [${passed ? 'PASS' : 'FAIL'}]`);
});

console.log(`\nSummary: ${passedCount}/${testCases.length} tests passed.`);

if (passedCount === testCases.length) {
    console.log('\nLogic verification successful!');
} else {
    process.exit(1);
}
