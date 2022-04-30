function add(a, b) {
  if (!a) {
    return add;
  }
  if (!b) {
    return function calc(c) {
      if (!c) return calc;
      return a + c;
    };
  }

  return a + b;
}

add(20, 22); // -> 42
add(20)(22); // -> 42
add(20)()(22); // -> 42
add(20)()()()(22); // -> 42
add(20)()()()()()()()()()()()(22); // -> 42
add()(20)(22); // -> 42
add()()()()(20)(22); // -> 42
add()(20)()(22); // -> 42
add()()()()()(20)()()()(22); // -> 42
