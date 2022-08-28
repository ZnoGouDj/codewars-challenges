function namespace(root, path, value?) {
  let keys = path.split('.');

  if (keys.length > 1) {
    return namespace((root[keys[0]] = root[keys.shift()] || {}), keys.join('.'), value);
  } else {
    return value === undefined ? root[keys[0]] : (root[keys[0]] = value);
  }
}

//!

function namespace1(root, path, value) {
  return path.split('.').reduce(function (prev, key, i, arr) {
    if (i == arr.length - 1) return value ? (prev[key] = value) : prev[key];
    return (prev[key] = {});
  }, root);
}

let stuff = {};
namespace(stuff, 'moreStuff.name', 'the stuff');
console.log(stuff); // results in {moreStuff: {name: 'the stuff'}}

stuff = {};

namespace(stuff, 'items.things');
console.log(stuff); // {items: {things: undefined}}

stuff = {};

namespace(stuff, 'moreStuff.evenMoreStuff.id', 1); // {moreStuff: {evenMoreStuff: {id: 1}}}
console.log(stuff);
