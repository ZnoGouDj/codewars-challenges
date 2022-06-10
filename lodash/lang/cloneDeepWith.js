import cloneDeepWith from 'lodash';
import isElement from 'lodash';

function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(true);
  }
}

var el = cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20
