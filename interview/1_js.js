const START = Date.now();

function someFn() {
  console.log('time', Date.now() - START);
  console.log('args', arguments);
}

Function.prototype.delay = function (ms) {
  return function (...args) {
    setTimeout(() => {
      this.apply(this, args);
    }, ms);
  }.bind(this);
};

const f = someFn.delay(1500);

f('arg1', 'arg2', 1, 2);

/*
Перед запуском запоминаем текущее время, и после запуска функции 
выводим разницу от текущего времени и того, что мы запомнили в логе. 
И выводим массив аргументов.

Далее для каждой функции необходимо реализовать функцию дилей, 
которая будет возвращать новую функцию, 
которая будет запускаться через какое-то количество милисекунд, 
которое мы передаем в параметры.
*/

/*

Проверяется понимание:
1) prototype
2) setTimeout
3) rest/spread
4) call/apply
5) context
6) arrow func vs. casual func
7) closure

*/
