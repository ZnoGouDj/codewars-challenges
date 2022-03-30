// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	        user argument or 'Hero'
// position	    '00'
// health	    100
// damage	    5
// experience	0

type S = string;
function Hero(name: S = 'Hero', position: S = '00', health: N = 100, damage: N = 5, experience: N = 0) {
  this.name = name;
  this.position = position;
  this.health = health;
  this.damage = damage;
  this.experience = experience;
}

//top
function Hero1(name: S) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//top2
function Hero2(name: S = 'Hero') {
  this.name = name;
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
