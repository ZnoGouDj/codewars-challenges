// Oh No!

// The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

// Task
// You have to write a comparator function which can sort the lines back into
// their correct order, otherwise Christmas will be cancelled!

// Reminder: Below is what the final verse should look like

// On the 12th day of Christmas my true love gave to me
// 12 drummers drumming,
// 11 pipers piping,
// 10 lords a leaping,
// 9 ladies dancing,
// 8 maids a milking,
// 7 swans a swimming,
// 6 geese a laying,
// 5 golden rings,
// 4 calling birds,
// 3 French hens,
// 2 turtle doves and
// a partridge in a pear tree.

var comparator = function (a: string, b: string): N {
  const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
  return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
};

//top2

let song = [
  'On the 12th day of Christmas my true love gave to me',
  '12 drummers drumming,',
  '11 pipers piping,',
  '10 lords a leaping,',
  '9 ladies dancing,',
  '8 maids a milking,',
  '7 swans a swimming,',
  '6 geese a laying,',
  '5 golden rings,',
  '4 calling birds,',
  '3 French hens,',
  '2 turtle doves and',
  'a partridge in a pear tree.',
];

var comparator1 = (a: string, b: string): N => song.indexOf(a) - song.indexOf(b);
