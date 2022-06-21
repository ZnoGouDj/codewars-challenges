const high = str => {
  let arr = str.split(' ');
  let maxWeight = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {
    let weight = [...arr[i]].reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0);
    if (weight > maxWeight) {
      maxWeight = weight;
      result = arr[i];
    }
  }

  return result;
};

console.log(high('man i need a taxi up to ubud')); // => 'taxi'
console.log(high('what time are we climbing up the volcano')); // => 'volcano'
console.log(high('take me to semynak')); // => 'semynak'
console.log(high('massage yes massage yes massage')); // => 'massage'
console.log(high('take two bintang and a dance please')); // => 'bintang'
console.log(high('aa b')); // => 'aa'
console.log(high('b aa')); // => 'b'
console.log(high('bb d')); // => 'bb'
console.log(high('d bb')); // => 'd'
console.log(high('aaa b')); // => 'aaa'
