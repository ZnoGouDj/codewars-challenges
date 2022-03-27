function bouncingBall(h, bounce, window) {
  if (bounce <= 0 || bounce >= 1) return -1;

  let count = -1;

  for (let i = h; i > window; i *= bounce) {
    count += 2;
  }

  return count;
}

//!

function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1

console.log(bouncingBall(2, 0.5, 1)); // 1
