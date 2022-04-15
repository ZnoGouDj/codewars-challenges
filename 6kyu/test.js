function longestConsec(strarr, k) {
  let longest = '';

  for (let i = 0; i <= strarr.length - k; i++) {
    let localLongest1 = strarr.slice(i, i + k).join('');
    if (localLongest1.length > longest.length) {
      longest = localLongest1;
    }
  }

  return longest;
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)); // "abigailtheta"
console.log(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1)); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)); // "ixoyx3452zzzzzzzzzzzz"
