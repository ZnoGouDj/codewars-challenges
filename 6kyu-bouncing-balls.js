function bouncingBall(h, bounce, window) {
  if (bounce <= 0 || bounce >= 1) return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1
