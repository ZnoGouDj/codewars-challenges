// Complete the solution so that it returns true if
// the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str: string, ending: string): boolean {
  return str.includes(ending, str.length - ending.length);
}

// top

function solution1(str: string, ending: string): boolean {
  return str.endsWith(ending);
}
