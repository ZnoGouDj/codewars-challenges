//return the total number of smiling faces in the array
function countSmileys(arr: S[]): N {
  const collection = [':\\)', ':D', ':~\\)', ':-\\)', ':~D', ':-D', ';\\)', ';D', ';~\\)', ';-\\)', ';~D', ';-D'];

  return arr.filter(
    el =>
      el.search(collection[0]) != -1 ||
      el.search(collection[1]) != -1 ||
      el.search(collection[2]) != -1 ||
      el.search(collection[3]) != -1 ||
      el.search(collection[4]) != -1 ||
      el.search(collection[5]) != -1 ||
      el.search(collection[6]) != -1 ||
      el.search(collection[7]) != -1 ||
      el.search(collection[8]) != -1 ||
      el.search(collection[9]) != -1 ||
      el.search(collection[10]) != -1 ||
      el.search(collection[11]) != -1
  ).length;
}

//!
function countSmileys1(arr: S[]): N {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)'])); // 4
