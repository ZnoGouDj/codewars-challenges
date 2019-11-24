function zero(n) { return jud(n, 0); }
function one(n) { return jud(n, 1); }

function two(n) { return jud(n, 2); }
function three(n) { return jud(n, 3); }
function four(n) { return jud(n, 4); }
function five(n) { return jud(n, 5); }
function six(n) { return jud(n, 6); }
function seven(n) { return jud(n, 7); }
function eight(n) { return jud(n, 8); }
function nine(n) { return jud(n, 9); }

function plus(n) { return '+' + n; }
function minus(n) { return '-' + n; }
function times(n) { return '*' + n; }
function dividedBy(n) { return '/' + n; }

function jud(n, i) {
    if (n === undefined) {
        return i;
    } else {
        return calc(n, i);
    }
}

function calc(n, i) {
    let operation = n.substr(0, 1);
    switch (operation) {
        case '+': return i + +n.substr(1);
        case '-': return i - +n.substr(1);
        case '*': return i * +n.substr(1);
        case '/': return Math.floor(i / +n.substr(1));
    }
} 

//top
var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function (l) { return l + r; }; }
function minus(r) { return function (l) { return l - r; }; }
function times(r) { return function (l) { return l * r; }; }
function dividedBy(r) { return function (l) { return l / r; }; }

//top2
function zero(func) { return func ? func(0) : 0; };
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(b) { return function (a) { return a + b; }; };
function minus(b) { return function (a) { return a - b; }; };
function times(b) { return function (a) { return a * b; }; };
function dividedBy(b) { return function (a) { return a / b; }; };