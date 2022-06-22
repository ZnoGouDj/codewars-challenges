function queueTime(customers, n) {
  if (!customers.length) return 0;
  if (n > customers.length) return Math.max(...customers);
  let time = 0;
  let currentCustomers = customers.splice(0, n); // [31, 34]
  console.log(currentCustomers);
  let queueLength = customers.length; // 14

  while (queueLength > 0) {
    let firstFinishedCustomer = Math.min(...currentCustomers);
    console.log('Первый покупатель на выход ', firstFinishedCustomer);
    let nextCurrentCustomers = currentCustomers
      .map(el => el - firstFinishedCustomer)
      .filter(el => el !== 0);
    console.log(
      'Теперь мы убираем его и остальных завершивших на**й и получаем следующий массив ',
      nextCurrentCustomers,
    );
    queueLength -= currentCustomers.length - nextCurrentCustomers.length;
    console.log(
      'Соответственно из длины очереди мы вычитаем вот столько ',
      currentCustomers.length - nextCurrentCustomers.length,
      '. И длина очереди становится ',
      queueLength,
    );
    time += firstFinishedCustomer;
    console.log(
      'Добавляем прошедшее время ',
      firstFinishedCustomer,
      'к общему времени и получаем ',
      time,
    );
    currentCustomers = [...nextCurrentCustomers];
    console.log('И в очереди осталось всего ', currentCustomers);

    for (let i = 0; i < n; i++) {
      let customerToPush = customers.shift();
      if (currentCustomers !== undefined) {
        currentCustomers.push(customerToPush);
      }
    }
    console.log(
      'Поэтому напихаем туда еще покупателей, так как всего касс у нас ',
      n,
      'И очередь на следующую итерацию выглядит следующим образом ',
      currentCustomers,
    );
    console.warn('================================');
  }

  return time;
}

function queueTime(customers, n) {
  if (!customers.length) return 0;
  if (n > customers.length) return Math.max(...customers);

  let arr = new Array(n);
  let queue = customers.length - n;
  let time = 0;

  let test = 5;
  while (test) {
    // while (queue > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = customers[i];
        queue--;
        customers.shift();
      }
    }
    console.log('math min ', Math.min(...arr));
    time += Math.min(...arr);
    console.log('time now is ', time);
    arr = arr.map(el => el - Math.min(...arr));
    arr.length = n;
    test--;
  }
  return time;
  // return time;
}

// console.log(queueTime([], 1)); // =>  0);
console.log(queueTime([1, 2, 3, 4], 1)); // =>  10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // =>  9);
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // =>  5);

// console.log(
//   queueTime(
//     [201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201],
//     2,
//   ),
// ); // => 1809
// console.log(queueTime([31, 34, 44, 12, 39, 30, 24, 28, 24, 16, 20, 43, 26, 10, 48, 29], 2)); // => 237
// console.log(queueTime([48, 46, 2, 9, 29, 5, 32, 46, 48, 18, 43, 18, 37, 40, 28], 5)); // => 97
