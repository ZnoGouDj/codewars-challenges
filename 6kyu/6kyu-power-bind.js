Function.prototype.bind1 = function(context) {
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function() {},
        fBound = function() {
            return fToBind.apply(
                this instanceof fNOP && context ? this : context,
                aArgs.concat(Array.prototype.slice.call(arguments)),
            );
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
};

// https://learn.javascript.ru/bind
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

Function.prototype.bind2 = function(ctx) {
    console.log('ctx: ', ctx);
    let fToBind = this;
    console.log(fToBind);
    let fNOP = function() {};
    let fBound = function() {
        // return fToBind.apply(this instanceof fNOP && ctx ? this : ctx);
        return fToBind.apply(ctx);
    };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
};

var func = function() {
    return this.prop;
};
var obj1 = {
        prop: 1,
    },
    obj2 = {
        prop: 2,
    };

func = func.bind2(obj1);
console.log(func()); // Will produce 1

func = func.bind2(obj2);
console.log(func()); // Will also produce 1 :(