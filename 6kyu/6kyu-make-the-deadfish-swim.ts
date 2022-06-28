function parse(data: string): number[] {
  const result: number[] = [];
  let val = 0;

  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        val++;
        break;
      case 'd':
        val--;
        break;
      case 's':
        val = Math.pow(val, 2);
        break;
      case 'o':
        result.push(val);
        break;
      default:
        break;
    }
  }

  return result;
}
