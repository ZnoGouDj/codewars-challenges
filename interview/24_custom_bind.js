Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  };
};

function log(...props) {
  console.log(this.name, this.age, ...props);
}

const obj = { name: 'Egor', age: 26 };

const bound = log.myBind(obj, 42, 'string');
bound(24, 25, 21);
