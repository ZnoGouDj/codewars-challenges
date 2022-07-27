// 1) есть массив объектов, отсортируй его по value

const obj = [{
        name: 'Bob',
        value: 2,
    },
    {
        name: 'Mark',
        value: 3,
    },
    {
        name: 'Kirk',
        value: 1,
    },
];

function sortIt(obj) {
    //
}

console.log(sortIt(obj)); // 'Kirk, Bob, Mark'

// 2) множественное наследование ебни классом или функцией

class Car {
    // ...
    drive() {}
}

class Boat {
    // ...
    swim() {}
}

function Amphibia(car, boat) {
    return {
        car: () => {
            return car.drive();
        },
        boat: () => {
            return boat.swim();
        },
    };
}

const amf = Amphibia(new Car(), new Boat());

amf.drive();
amf.swim();

// 3) суммируй промисы
async function get_1() {
    return Promise.resolve(1);
} // 1
async function get_2() {
    return 2;
}
async function get_3() {
    return Promise.reject(3);
}
async function get_4() {
    throw 4;
}

const get1 = await get_1();
const get2 = await get_2();
const get3 = await get_3().catch(val => {
    return val;
});
const get4 = await get_4().catch(val => {
    return val;
});

let sum = get1 + get2 + get3 + get4;
console.log(sum); // 10