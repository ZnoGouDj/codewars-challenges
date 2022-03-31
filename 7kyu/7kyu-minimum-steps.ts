function minimumSteps(numbers: N[], value: N): N {
  let sum = 0;
  let count = 0;

  let nubmersInOrder = numbers.sort(function (a: N, b: N) {
    return a - b;
  });

  for (let i = 0; i < nubmersInOrder.length; i++) {
    if (sum + nubmersInOrder[i] < value) {
      sum += nubmersInOrder[i];
      count++;
    }
  }

  return count;
}

function minimumSteps1(numbers: N[], value: N): N {
  const nums = numbers.slice().sort((a, b) => a - b);
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
}

console.log(minimumSteps([4, 6, 3], 7));
// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
