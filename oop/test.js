async function get_1() {
    return Promise.resolve(1);
}
async function get_2() {
    return 2;
}
async function get_3() {
    return Promise.reject(3);
}
async function get_4() {
    throw 4;
}

const get1 = async () => console.log(await get_1());
const get2 = async () => console.log(await get_2());
const get3 = async () => console.log(await get_3().catch(val => val));
const get4 = async () => console.log(await get_4().catch(val => val));

let sum = get1 + get2 + get3 + get4;
console.log(sum); // 10
get1();
get2();
get3();
get4();