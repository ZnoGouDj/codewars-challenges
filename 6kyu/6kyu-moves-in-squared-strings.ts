const reverse = (s: string): string => s.split('').reverse().join('');

const rot = (string: string): string => {
  return string
    .split('\n')
    .map(el => reverse(el))
    .reverse()
    .join('\n');
};

const selfieAndRot = (string: string): string => {
  const selfie = string.split('\n').map(el => el.padEnd(el.length * 2, '.'));

  const rot = string
    .split('\n')
    .reverse()
    .map(el => reverse(el).padStart(el.length * 2, '.'));

  return selfie.concat(rot).join('\n');
};

const oper = (fct: Function, s: string): string => fct(s);

/*
rot => rotation : "abcd\nefgh\nijkl\nmnop" => "ponm\nlkji\nhgfe\ndcba"

selfieAndRot => original string + dots(string.length) / dots + rotated string : 
"abcd\nefgh\nijkl\nmnop" => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
*/

// console.log(rot('abcd\nefgh\nijkl\nmnop'));
console.log(selfieAndRot('abcd\nefgh\nijkl\nmnop'));

// console.log(oper(rot, 'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'));
//? ('LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif');
// console.log(oper(rot, 'rkKv\ncofM\nzXkh\nflCB'));
//? 'BClf\nhkXz\nMfoc\nvKkr'

console.log(oper(selfieAndRot, 'xZBV\njsbS\nJcpN\nfVnP'));
//? "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
console.log(oper(selfieAndRot, 'uLcq\nJkuL\nYirX\nnwMB'));
//? "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
