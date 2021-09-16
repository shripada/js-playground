'use strict';

const assert = require('assert');

const TEAM_INDIA = { country: 'India', type: 'A' };

function createCricketer(firstNameIn, lastNameIn, teamIn = TEAM_INDIA) {
    const aCricketer = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        getScore() {
            return 100;
        }
    };
    return Object.create(aCricketer, {
        firstName: {
            value: firstNameIn,
            writable: true,
            enumerable: true
        },
        lastName: {
            value: lastNameIn,
            writable: true,
            enumerable: true
        },
        team: {
            value: teamIn,
            writable: true,
            enumerable: true
        }
    });
}

var person = createCricketer('Virat', 'Kohli');

console.log(person.fullName());
console.log('Virat scored: ', person.getScore());

// Augmenting existing types.
// Every object in JS, by default has a prototype link to an object called Object.prototype

const person1 = createCricketer('Rohit', 'Sharma'); //  person1.__prototype__ = aCricker. aCricker.__prototype__ = Object.prototype

Object.prototype.APP_NAME = 'Cricket Info';

console.log(person1.APP_NAME);
console.log(person.APP_NAME);

// Function is an object.  Function.prototype -> Object.prototype
// Array is an object. Array.prototype
// String
// Number

createCricketer.importantFact = 'Cricket is a popular game in India';

Function.prototype.format = function () {
    return `Formatted ${this}`;
};

console.log(createCricketer.format());

const name = 'Shripada';

const doStuff = () => {
    return 'some stuff';
};

console.log(doStuff.format());

const nameWithLotOfspacesInLeadingAndTrailingSpaces = '   this is cool   ';

const trimString = function (string) {
    return string.replace(/^\s+|\s+$/g, '');
};

trimString(nameWithLotOfspacesInLeadingAndTrailingSpaces);

// let trimmed = nameWithLotOfspacesInLeadingAndTrailingSpaces.trimLeadingAndTrailingWhitespaces();
// console.log(trimmed);

String.prototype.trimNew = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

const trimmed = nameWithLotOfspacesInLeadingAndTrailingSpaces.trimNew();
assert.equal(trimmed, 'this is cool', 'We should get the string trimmed');
console.log(trimmed);

String.prototype.trim = function () {
    return `${this} wont be formatted!`;
};
console.log(nameWithLotOfspacesInLeadingAndTrailingSpaces.trim());

console.log(String);

Function.prototype.method = function (name, func) {
    if (this.prototype[name]) {
        return this;
    }
    this.prototype[name] = func;
    return this;
};

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});
