/*
Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

a function that takes two: (element, index), one: (element) or any arguments 
(similar to map function), then filled running this function, in other words: 
function describes sequence,
number, string or any other object, then filled by copying, this object n-times.

Examples:
sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Note: Sequences are great to work with functional methods like map, 
reduce, forEach, every or any. For example:

sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);

Be careful with long sequences. They are just arrays, every element is created when function is called.

For lazy sequences (elements created when needed) use Iterator.

*Ну тебе на вход приходит функция
Чтобы получить результат - ты вызываешь функциию с двумя аргументами
Первый арг - значение, которое тебе дают первым аргументом
Второе - индекс в массиве
Думай об этом как об Array.map
Вот ты передаешь в мап функцию
Первый арг этой функции - элемент, который ты оьрабаытваешь
Второй - его индекс
По факту, у тебя тут будет цепочка
fn sequence (x, generator) =>
Если generator - функция, то чтобы получить i'й элемент, ты вызываешь generator с аргументами какими то
Второй аргумент генератора - это индекс элемента
Первый - хз
Не понятно из описания
Читай условие задачи
*/

function sequence(n, pattern) {
    const array = Array.from({ length: n });
    if (typeof pattern === 'function') {
        return array.map(pattern);
    }
    return array.map(x => pattern);
}

//top

function sequence(n, pattern) {
    return Array.from({ length: n }, typeof pattern === "function" ? pattern : () => pattern)
}