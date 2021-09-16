//Object literal
// How to set and get values from object literal
// how to iterate through keys in a object literal
// methods
// this pointer
// optional chaining.

//An object is a key value collection
const assert = require('assert');

let name = 'Global John';

let student = {
    name: 'John',
    age: 19,
    'courses enrolled': ['maths', 'science', 'cs'],
    address: {
        line1: 'some lane',
        city: 'udupi',
        state: 'karnataka',
        pin: '576101',
        nearByLandMark: {
            name: 'ABC Tower',
            distance: '1km'
        }
    }
    // method - is a function, which is part of an object.
    // description: function () {
    //     console.log('Hi, I am a student');
    //     //console.log(student.name); //Not a good way of accessing properties of object to which method belongs
    //     console.log(this.name);
    //     console.log(this.address.nearByLandMark);
    // }
};

const descFunction = function () {
    console.log('Hi, I am a student');
    //console.log(student.name); //Not a good way of accessing properties of object to which method belongs
    console.log(this.name);
    //console.log(this.address.nearByLandMark)  //unsafe access, not checking if address really exist, before trying to access nearByLandMark
    //console.log(this.address ? this.address.nearByLandMark : `nearby landmark not found for student: ${this.name}`);
    console.log(this?.address?.nearByLandMark);
    //console.log(this.address.nearByLandMark.distance); //unsafe. dont do this!!
    // console.log(
    //     this.address
    //         ? this.address.nearByLandMark
    //             ? this.address.nearByLandMark.nearByLandMark
    //             : 'landmark not found'
    //         : 'address not found'
    // );
    console.log(this.address?.nearByLandMark?.distance); //Optional chaining will guarantee an actual value of the expression, or undefined.
    console.log(this['address']?.['nearByLandMark']?.['distance']);
};

student.description = descFunction;

// console.log(student.name);
// console.log(student['name']);
// console.log(student['courses enrolled']);
// console.log(student.address);
// console.log(student.address.nearByLandMark);
// console.log(student['address']['nearByLandMark']);

const anotherStudent = {}; //Empty object literal

anotherStudent.name = 'Tom';
anotherStudent.address = {
    line1: 'Some lane',
    landmark: 'Some landmark'
};

// console.log(anotherStudent.name);

// The this reference inside the function description, or in general any method, gets bound to the object when it is invoked on that object
student.description();

const descriptionOfStudent = student.description;

anotherStudent.description = descFunction;
anotherStudent.description();

// console.log(Object.keys(student));

// console.log(Object.values(student));

for (let key in student) {
    console.log(student[key]);
}

let oneMoreStudent = student; // Reference to the same object.

// Pass by value,  and another pass by reference.
// value types (numbers, dates, strings), reference types

let x = 'India';
let y = x;
y = 'Japan';

// x to be 50?   value type, pass by value ( a copy is made before the assing happens)

oneMoreStudent.name = 'Some other john';
// console.log(student.name);

const nullObject = Object.create(null); // {}
// console.log(nullObject);

const yetAnotherStudent = Object.create(student);

// console.log(yetAnotherStudent.name);
// console.log(yetAnotherStudent['name']);
// console.log(yetAnotherStudent['courses enrolled']);
// console.log(yetAnotherStudent.address);
// console.log(yetAnotherStudent.address.nearByLandMark);
// console.log(yetAnotherStudent['address']['nearByLandMark']);
// yetAnotherStudent.name = 'Krishna';
// console.log(student.name);

const prototypeObject = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var person = Object.create(prototypeObject, {
    firstName: {
        value: 'Virat',
        writable: true,
        enumerable: true
    },
    lastName: {
        value: 'Kohli',
        writable: true,
        enumerable: true
    },
    team: {
        value: { country: 'India', type: 'A' },
        writable: true,
        enumerable: true
    }
});

person.firstName = 'Mr. Virat';
console.log(person);

// Constructor function

function Student(name, age, courses) {
    this.name = name;
    this.age = age;
    this.courses = courses;
}

let fresher = new Student('Radha', 20, ['science', 'maths']); // {}.

fresher = {};
fresher.Constructor = Student;
fresher.Constructor('Radha', 20, ['science', 'maths']);

// console.log(fresher.name);
console.log(fresher);

const rohit = {};

for (let key in person) {
    rohit[key] = person[key]; //Objects are being shallow copied.
}

rohit.firstName = 'Rohit';
rohit.lastName = 'Sharma';
assert.equal(person.team.type, 'A', "Person's team type must be 'B'");
assert.equal(rohit.firstName, 'Rohit', "Rohit's first name must be Rohit");
assert.equal(rohit.team, person.team, 'Rohit should belong to same team as of Virat');
assert.equal(person.firstName, 'Mr. Virat', 'Person should have firstname as Virat');
