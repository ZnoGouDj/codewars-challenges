function Journey(object, crew, balloons) {
  this.weight = object.weight + crew * 80;
  this.balloons = balloons;
}

Journey.prototype.isPossible = function () {
  // return [this.weight * 1000, this.balloons * 4.8];
  return this.weight * 1000 - this.balloons * 4.8 < 0;
};

var letterToEllie = {
  weight: 0.004536,
};
var house = {
  weight: 45000,
};
var pushCart = {
  weight: 95,
};
var lawnChair = {
  weight: 5,
};

var flyingCart = new Journey(pushCart, 0, 50);
var loveOfMyLife = new Journey(letterToEllie, 0, 1);
var gravityFalls = new Journey(house, 2, 20622);
console.log(flyingCart.isPossible()); // false, "should be false as 50 balloons is not enough!");
console.log(loveOfMyLife.isPossible()); // true, "should be true as 1 balloon is just enough to express one's love on a sheet of paper!");
console.log(gravityFalls.isPossible()); // false, "should be false as 20622 balloons is not enough!");
