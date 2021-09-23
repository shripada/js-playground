const assert = require('assert');
//Array -> heterogenous collection of items
// dynamic

const numbers = [1, 2, 3, 4];

assert(typeof numbers === 'object');
assert(Array.isArray(numbers));

assert(numbers.length === 4);

numbers[10] = 10;
numbers[8] = 8;
assert.equal(numbers[10], 10);
assert.equal(numbers[5], undefined);
console.log(numbers);

// map ->  transform elements in an array into another array of equal length
// filter -> runs a predicate on each item of the array and returns an array containing only those
// items which pass the predicate.  predicate -> boolean expression/function

function map(array, transform) {
    const transformed = [];

    for (let i = 0; i < array.length; i++) {
        const transformedItem = transform(array[i]);
        transformed.push[transformedItem];
    }

    return transformed;
}

numbers.forEach((item) => console.log(item));

const squares = numbers.map((x) => x * x);

const cleanSquares = numbers.map((x) => x * x).filter((s) => s !== undefined);
console.log(cleanSquares);

// reduce function
// It basically starts with an initial value. then it applies a callback on each item, where the callback gets
// the (accumulated value so far, item, item index, array) => newly accumulated value

// Find the sum of the numbers
const sum = numbers.reduce((accumulatedValue, currentItem) => accumulatedValue + currentItem, 10);
assert.equal(sum, 38);

// implement map using reduce, or even filter using reduce

function mapUsingReduce(array, transform) {
    return array.reduce((transformed, currentValue) => {
        const transformedVal = transform(currentValue);
        // transformed.push() // Dont do this inside reducer, we are suppose to accumulate new always
        const newTransformed = [...transformed];
        newTransformed.push(transform(currentValue));
        //reducer has to return newly accumulated value
        return newTransformed;
    }, []);
}

const squaresUsingMap = mapUsingReduce(numbers, (num) => num * num);
console.log(squaresUsingMap);

// Implement filter using reduce.
// some
// first
