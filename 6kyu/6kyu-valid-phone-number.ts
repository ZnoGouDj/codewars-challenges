function validPhoneNumber(phoneNumber: string): boolean {
  if (phoneNumber[9] !== '-') return false;
  let parts = phoneNumber.split(/[ -]/);
  if (parts.length !== 3) return false;

  if (parts[0].length !== 5 || parts[0][0] !== '(' || parts[0][4] !== ')') return false;

  if (![...parts[0].slice(1, -1)].every(el => +el >= 0)) return false;

  if (![...parts[1]].every(el => +el >= 0) || ![...parts[2]].every(el => +el >= 0)) return false;

  return true;
}
