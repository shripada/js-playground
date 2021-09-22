let student = {
    name: 'Shripada',
    age: 16
};

function processStudent(student) {
    let name = 'somename';
    const { name: sName, age } = student;

    console.log(sName);
}

processStudent(student);

function renderShape({ x, y, width, height }) {
    console.log(x, y, width, height);
}

let shape = { x: 10, y: 10, width: 100, height: 100, plane: 'z' };

renderShape(shape);

function renderShapeAbsolute(x, y, width, height) {
    console('absolute render', x, y, width, height);
}

let complexShape = { ...shape, complexSide: 100 };
console.log(complexShape);

const state = { amount: 0, baseValue: 10, discount: 5 };

// {type: 'ADD', amount: 20}
const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';

const amountReducer = (state, action) => {
    switch (action.type) {
        case ADD_ACTION:
            const newState = { ...state, amount: state.amount + action.amount };
            return newState;
        default:
            return state;
    }
};

const newState = amountReducer(state, { type: 'ADD', amount: 40 });
const anotherState = amountReducer(newState, { type: 'ADD', amount: 40 });
console.log(anotherState);
