function queueTime(customers: number[], tills: number): number {
  if (!customers.length) return 0;
  if (tills > customers.length) return Math.max(...customers);

  let totalTime = 0;
  let currentQueue = customers.splice(0, tills);

  while (customers.length) {
    let minCheckoutTime = Math.min(...currentQueue);
    let customersLeft = currentQueue
      .map(customer => customer - minCheckoutTime)
      .filter(customer => customer !== 0);

    while (customersLeft.length < tills && customers.length) {
      customersLeft.push(customers.shift());
    }

    currentQueue = [...customersLeft];
    totalTime += minCheckoutTime;
  }

  totalTime += Math.max(...currentQueue);

  return totalTime;
}

//! genuis

function queueTime1(customers: number[], n: number): number {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

//? or different syntax

function queueTime2(customers: number[], n: number): number {
  let tills = Array(n).fill(0);

  customers.forEach(customer => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

console.log(queueTime([], 1)); // =>  0);
console.log(queueTime([1, 2, 3, 4], 1)); // =>  10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // =>  9);
console.log(queueTime([1, 2, 3, 4, 5], 100)); // =>  5);

console.log(
  queueTime(
    [201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201],
    2,
  ),
); // => 1809
console.log(queueTime([31, 34, 44, 12, 39, 30, 24, 28, 24, 16, 20, 43, 26, 10, 48, 29], 2)); // => 237
console.log(queueTime([48, 46, 2, 9, 29, 5, 32, 46, 48, 18, 43, 18, 37, 40, 28], 5)); // => 97

/*
SUPERMARKET TILL
=====================
| till1  |  till2  |
|========|=========|
|  10    |    2    |
|        |         |
|                  | 
|        3         |
|                  |
         3
*/
