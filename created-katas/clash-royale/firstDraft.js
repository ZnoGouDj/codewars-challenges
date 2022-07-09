const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

//? SOLUTION

function correctAnswer(deck) {
  if (deck.length < 5) return null;

  let notInCurrentHand = deck.slice(-4);
  let canBeInCurrentHand = deck.filter(card => !notInCurrentHand.includes(card));

  let probableCurrentHand = canBeInCurrentHand.splice(
    canBeInCurrentHand.length - 4,
    canBeInCurrentHand.length,
  );

  while (probableCurrentHand.length !== [...new Set(probableCurrentHand)].length) {
    probableCurrentHand = [...new Set(probableCurrentHand)];
    probableCurrentHand.push(canBeInCurrentHand.pop());
  }

  return probableCurrentHand;
}

//? DATA

const UNITS = [
  'Archers',
  'Archer Queen',
  'Baby Dragon',
  'Balloon',
  'Bandit',
  'Barbarians',
  'Bats',
  'Battle Healer',
  'Battle Ram',
  'Bomber',
  'Bowler',
  'Cannon Cart',
  'Dark Prince',
  'Dart Goblin',
  'Electro Dragon',
  'Electro Giant',
  'Electro Spirit',
  'Electro Wizard',
  'Elite Barbarians',
  'Elixir Blob',
  'Elixir Golem',
  'Executioner',
  'Firecracker',
  'Fire Spirit',
  'Fisherman',
  'Flying Machine',
  'Giant',
  'Giant Skeleton',
  'Goblin Brawler',
  'Goblin Gang',
  'Goblin Giant',
  'Goblins',
  'Golden Knight',
  'Golem',
  'Guards',
  'Hog Rider',
  'Hunter',
  'Heal Spirit',
  'Ice Golem',
  'Ice Spirit',
  'Ice Wizard',
  'Inferno Dragon',
  'Knight',
  'Lava Hound',
  'Lumberjack',
  'Magic Archer',
  'Mega Knight',
  'Mega Minion',
  'Mighty Miner',
  'Miner',
  'Mini P.E.K.K.A.',
  'Minions',
  'Mother Witch',
  'Musketeer',
  'Night Witch',
  'P.E.K.K.A.',
  'Prince',
  'Princess',
  'Ram Rider',
  'Rascal Boy',
  'Rascal Girl',
  'Royal Ghost',
  'Royal Giant',
  'Royal Hogs',
  'Royal Recruits',
  'Skeletons',
  'Skeleton Barrel',
  'Skeleton Dragons',
  'Skeleton King',
  'Sparky',
  'Spear Goblins',
  'Three Musketeers',
  'Valkyrie',
  'Wall Breakers',
  'Witch',
  'Wizard',
  'Zappies',
];

const BUILDINGS = [
  'Bomb Tower',
  'Cannon',
  'Inferno Tower',
  'Mortar',
  'Tesla',
  'X-Bow',
  'Barbarian Hut',
  'Elixir Collector',
  'Furnace',
  'Goblin Cage',
  'Goblin Drill',
  'Goblin Hut',
  'Tombstone',
];

const BIG_SPELLS = ['Earthquake', 'Fireball', 'Lightning', 'Poison', 'Rocket', 'Royal Delivery'];

const LIGHT_SPELLS = ['Arrows', 'Barbarian Barrel', 'Giant Snowball', 'The Log', 'Tornado', 'Zap'];

//? DECKS GENERATION

const decks = [];

for (let i = 0; i < 100; i++) {
  let deck = [];

  // spells generation
  let rndBig = Math.floor(Math.random() * BIG_SPELLS.length);
  let rndSmall = Math.floor(Math.random() * LIGHT_SPELLS.length);

  deck.push(BIG_SPELLS[rndBig], LIGHT_SPELLS[rndSmall]);

  // building generation
  let bldng = Math.floor(Math.random() * BUILDINGS.length);
  deck.push(BUILDINGS[bldng]);

  // troops generation
  for (let i = 0; i < 5; i++) {
    let rnd = Math.floor(Math.random() * UNITS.length);

    if (!deck.includes(UNITS[rnd])) {
      deck.push(UNITS[rnd]);
    } else {
      i--;
    }
  }

  decks.push(deck);
}

//? PLAYS GENERATION

function randomInteger(min = 2, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let plays = [];

for (let i = 0; i < decks.length; i++) {
  let play = [];
  let playsQty = randomInteger();
  for (let j = 0; j < playsQty; j++) {
    let rndCard = Math.floor(Math.random() * decks[i].length);
    if (!play.slice(-4).includes(decks[i][rndCard])) {
      play.push(decks[i][rndCard]);
    }
  }
  plays.push(play);
}

//? APPLY FUNCTION

for (let i = 0; i < plays.length; i++) {
  describe('currentHand', function () {
    it('random tests', function () {
      let attempt;
      let answer;

      if (currentHand(plays[i]) !== null && correctAnswer(plays[i]) !== null) {
        attempt = currentHand(plays[i]).sort((a, b) => a.localeCompare(b));
        answer = correctAnswer(plays[i]).sort((a, b) => a.localeCompare(b));
      }

      assert.deepEqual(attempt, answer);
    });
  });
}

console.log(plays);

let currentPlays = [
  // ('Lightning',
  'Goblin Drill',
  // 'Hog Rider',
  'Skeleton Barrel',
  'Archer Queen',
  // 'Arrows',
  // 'Lightning',
  'Goblin Drill',
  // 'Ice Golem',
  'Skeleton Barrel',
  'Archer Queen',
  // 'Hog Rider',
  'Goblin Drill',
  // 'Lightning',
  // 'Arrows',
  // 'Ice Golem',
  // 'Hog Rider')
]; // => ['Archer Queen', 'Goblin Drill', 'Skeleton Barrel', undefined];
