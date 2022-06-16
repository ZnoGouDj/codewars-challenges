function maskify(cc: string): string {
  let last4characters = cc.slice(-4);
  let times = cc.length - 4 > 0 ? cc.length - 4 : 0;
  return '#'.repeat(times) + last4characters;
}

function maskify1(cc: string): string {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
