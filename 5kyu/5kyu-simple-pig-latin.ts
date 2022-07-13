export const pigIt = (a: string): string => {
  return a
    .split(' ')
    .map(word =>
      word.match(/[.,:!?]/) ? word : word === '' ? word : word.slice(1) + word[0] + 'ay',
    )
    .join(' ');
};

console.log(
  pigIt(
    'ATFpvMPIDGLNLoOaV jYFXM kyVMWByNqjnsTxcV mqLyGUdsQUBXg losdz arZ WrWKVjltijxuSw UelkDrGYlo ? ? dYQcGmLPoUAGYTUEp oqssaikJUj ?  ? GYgMc mrp tQW XKRegebpuGZKpL ruTPECbQPWfjZYzpQF',
  ),
);
