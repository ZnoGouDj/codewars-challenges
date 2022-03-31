// Friends
// Andrzej was given a task:

// There are n jars with pills. In every jar there is a different
// type of pill and the amount of pills in each jar is infinite.
// One type of pill makes a person glow about 30 minutes after taking
// and none of the other types has any effect.

// His job is to determine, in which jar are the pills that make a person
// glow. But there is one catch, he only has 35 minutes to do so.(so he can't
// take a pill, wait for the results and then take another one, because he
// wouldn't be able to see the results) Fortunetely, he can take any number
// of friends he needs with him. On completing the task Andrzej receives one
// million dollars. You know that Andrzej is very honest, so he will split
// the money equally with his friends.

// Your job is to determine how many friends does Andrzej need to complete
// the task.(He also wants to make the highest amount of money.)

// For example for n = 2

// The answer is 0 because he doesn't need any friends, he just needs to take
// a pill from the first jar and wait for the effects.

// For another example for n = 4

// The answer is 1 because having pills A B C D Andrzej can take pills A B
// and the friend can take pills B C

// Note: Andrzej is not able to accurately measure time during the task.

// assert.strictEqual(friends(0), 0);
// assert.strictEqual(friends(1), 0);
// assert.strictEqual(friends(2), 0);

// didn't finish this kata, so top 1 is:

function friends(n: number, acc = 0): number {
  if (n <= 2) {
    return acc;
  } else {
    return friends(n / 2, acc + 1);
  }
}

//top 2

function friends1(n: number): number {
  let count = 0;
  if (n <= 2) {
    return count;
  }
  if (n > 2) {
    while (n > 2) {
      n /= 2;
      count++;
    }
    return count;
  }
}

//diff
function friends2(n: number): number {
  if (n <= 2) {
    return 0;
  }
  return Math.floor(Math.log(n - 1) / Math.log(2));
}
