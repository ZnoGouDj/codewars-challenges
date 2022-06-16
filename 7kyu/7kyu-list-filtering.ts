function filter_list(l: any[]): number[] {
  return l.filter(el => typeof el === 'number');
}
