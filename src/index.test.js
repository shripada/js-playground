const { isPrime } = require('./index');

test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});
