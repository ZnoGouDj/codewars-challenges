Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
        return this.call(context, ...args.concat(rest));
    };
};

function log(...props) {
    console.log(this.name, this.age, ...props);
}

const obj = {
    name: 'Egor',
    age: 26,
};

const bound = log.myBind(obj, 42, 'string');

console.log(bound(24, 25, 21)); // => Egor 26 42 string 24 25 21