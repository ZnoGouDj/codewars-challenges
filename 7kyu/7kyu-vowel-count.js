function getCount(str) {
    const filterLetters = ['a', 'e', 'i', 'o', 'u'];
  
    return str.split('').filter(el => filterLetters.includes(el)).length;
}
  
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}