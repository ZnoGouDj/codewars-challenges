/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
a = 97
u = 117
e = 101
*/

function isVow(a: number[]): number | string[] {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case 97:
        arr.push('a');
        break;
      case 117:
        arr.push('u');
        break;
      case 101:
        arr.push('e');
        break;
      case 105:
        arr.push('i');
        break;
      case 111:
        arr.push('o');
        break;
      default:
        arr.push(a[i]);
    }
  }
  return arr;
}

//another

function isVow1(a: number | string[]): number | string[] {
  for (let i = 0; i < String(a).length; i++) {
    let char = String.fromCharCode(a[i]);
    if ('aeiou'.indexOf(char) !== -1) a[i] = char;
  }

  return a;
}

//another
let y: any;
const isVow2 = (a: number[]): number | string[] => a.map(x => ('aeiou'.includes((y = String.fromCharCode(x))) ? y : x));

/*
let index = items.indexOf(3452);

if (index !== -1) {
    items[index] = 1010;
}
Также рекомендуется не использовать метод конструктора для инициализации ваших массивов. Вместо этого используйте буквенный синтаксис:

let items = [523, 3452, 334, 31, 5346];
Вы также можете использовать оператор ~, если вы используете краткий JavaScript и хотите сократить сравнение -1:

let index = items.indexOf(3452);

if (~index) {
    items[index] = 1010;
}


Иногда мне даже нравится писать функцию contains, чтобы отвлечь эту проверку и упростить понимание того, что происходит. Что удивительно, это работает с массивами и строками:

let contains = function (haystack, needle) {
    return !!~haystack.indexOf(needle);
};

// can be used like so now:
if (contains(items, 3452)) {
    // do something else...
}
Начиная с ES6/ES2015 для строк и предлагаемого для ES2016 для массивов, вы можете более легко определить, содержит ли источник другое значение:

if (haystack.includes(needle)) {
    // do your thing
}

*/
