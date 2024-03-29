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
    const result = [...obj];

    result.sort((a, b) => a.value - b.value);

    return result.map(el => el.name).join(', ');
}

console.log(sortIt(obj)); // 'Kirk, Bob, Mark'

// 2) множественное наследование сделай классом или функцией

class Car {
    constructor(mark = 'Audi') {
        this.mark = mark;
    }

    drive() {
        return 'Driving';
    }
}

class Boat {
    constructor(mark = 'Honda') {
        this.mark = mark;
    }

    swim() {
        return 'Swimming';
    }
}

function Amphibia(car, boat) {
    return {
        drive: () => {
            return car.drive();
        },
        swim: () => {
            return boat.swim();
        },
    };
}

const amf = Amphibia(new Car(), new Boat());

console.log(amf.drive());
console.log(amf.swim());

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

//!

// async function get_1() {
//     return Promise.resolve(1);
// }
// async function get_2() {
//     return 2;
// }
// async function get_3() {
//     return Promise.reject(3);
// }
// async function get_4() {
//     throw 4;
// }

// const get1 = async () => console.log(await get_1());
// const get2 = async () => console.log(await get_2());
// const get3 = async () => console.log(await get_3().catch(val => val));
// const get4 = async () => console.log(await get_4().catch(val => val));

// let sum = get1 + get2 + get3 + get4;
// console.log(sum); // 10
// get1();
// get2();
// get3();
// get4();