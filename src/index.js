const assert = require('assert');

function isPrime(number) {
    if (typeof number !== 'number') {
        return false;
    }

    if (number === 1 || number === 0) {
        return false;
    }
    let i;
    for (i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// assert(isPrime(0) === false, '0 is not a prime');
// assert(isPrime(1) === false, '1 is not a prime');
// assert(isPrime(2), '2 must be prime');
// assert(isPrime(3), '3 must be prime');
// assert(isPrime(29), '29 must be prime');
// assert(isPrime(28) === false, '28 is not a prime');
// assert(isPrime(1549), '1549 is  a prime');
// assert(isPrime(2147483647), '2,147,483,647 is a prime');
// assert(isPrime('Hi') === false, 'Hi must be prime');

// We need a funtion that can give us 'n' th prime number
// 2, 3, 5, 7, 11, 13, 17, 19 ....
// 2nd prime = 3,  4th --> 7 and so on.
const memoizedPrimes = [];

function getPrimeNumberAtIndex(index) {
    if (typeof index !== 'number' || index < 1) {
        throw new Error('We can not compute a prime as the index passed is not valid');
    }

    // Check if there is already a computed prime at given index
    if (memoizedPrimes[index - 1] !== undefined) {
        return memoizedPrimes[index - 1];
    }

    // index
    // compute the i th prime number.
    // This will require us to maintain the count of prime numbers
    // which we iteratively compute, and when count matches the given index
    // then we will return the prime number computed in that iteration.
    let count = 0;

    // We want to iterate through the natural numbers and count prime numbers
    // and when count enough primes equalling the provided index, we want to return that.
    let naturalNumber = 2;
    while (count < index) {
        if (isPrime(naturalNumber)) {
            memoizedPrimes[count] = naturalNumber;
            count += 1;

            if (count === index) {
                return naturalNumber;
            }
        }
        naturalNumber++;
    }
    // Control should never come here.
}

assert.throws(function () {
    getPrimeNumberAtIndex(0);
}, 'Trying to find prime at 0 should throw an exception');
assert(getPrimeNumberAtIndex(1) === 2, 'The prime number must be 2 at index 1');
assert.equal(getPrimeNumberAtIndex(1), 2, 'The prime number must be 2 at index 1');
assert.equal(getPrimeNumberAtIndex(10), 29, 'The prime number must be 29 at index 10');
assert.equal(getPrimeNumberAtIndex(9), 23, 'The prime number must be 23 at index 9');

const obj = {
    address: {
        street: 'Karavali',
        post: 'ambalpady'
    }
};

module.exports = {
    isPrime
};
