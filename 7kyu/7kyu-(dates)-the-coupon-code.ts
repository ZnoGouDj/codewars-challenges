function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  if (correctCode !== enteredCode) return false;
  let [month, day, year] = currentDate.replace(',', '').split(' ');
  let [expMonth, expDay, expYear] = expirationDate.replace(',', '').split(' ');

  if (expYear < year) return false;
  if (months[expMonth] < months[month] && expYear === year) return false;
  if (+expDay < +day && expYear === year && months[expMonth] === months[month]) return false;

  return true;
}

//!

function checkCoupon1(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
}

//?

function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // => true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // => false
console.log(checkCoupon('a12v564', 'a12v564', 'March 25, 1998', 'March 5, 1998')); // => false
