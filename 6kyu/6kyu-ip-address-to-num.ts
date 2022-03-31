function ipToNum(ip: string): number {
  let splitByFour = ip.split('.');

  const binary = [];

  splitByFour.forEach(el => {
    binary.push(Number(el).toString(2).padStart(8, '0'));
  });

  let binaryMerge = binary.join('');

  return parseInt(binaryMerge, 2);
}

function numToIp(num: number): string {
  let decimalToBinary = Number(num).toString(2).padStart(32, '0');

  const decimal = [];

  decimalToBinary.match(/.{1,8}/g).forEach(el => {
    decimal.push(parseInt(el, 2));
  });

  return decimal.join('.');
}

console.log(ipToNum('192.168.1.1')); // 3232235777
console.log(ipToNum('10.0.0.0')); // 167772160
console.log(ipToNum('176.16.0.1')); // 2953838593

console.log(numToIp(3232235777)); // '192.168.1.1'
console.log(numToIp(167772160)); // '10.0.0.0'
console.log(numToIp(2953838593)); // '176.16.0.1'

console.log(numToIp(ipToNum('192.168.1.1'))); // '192.168.1.1'
console.log(numToIp(ipToNum('10.0.0.0'))); // '10.0.0.0'
console.log(numToIp(ipToNum('176.16.0.1'))); // '176.16.0.1'
console.log(ipToNum(numToIp(3232235777))); // 3232235777
console.log(ipToNum(numToIp(167772160))); // 167772160
console.log(ipToNum(numToIp(2953838593))); // 2953838593
