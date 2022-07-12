const assert = require('chai').assert;
const _ = require('lodash');
const range = _.range;

const RANDOM_TEST_CASE_COUNT = 100;
const MAX_DECK_SIZE = 8;
const HAND_SIZE = 4;
const TURN_COUNT = 100;

const cards = [
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
  'Earthquake',
  'Fireball',
  'Lightning',
  'Poison',
  'Rocket',
  'Royal Delivery',
  'Arrows',
  'Barbarian Barrel',
  'Giant Snowball',
  'The Log',
  'Tornado',
  'Zap',
];

function getExpectedResult(input) {
  const deck = _.uniq(input);
  const lastPlayedHand = _.takeRight(input, HAND_SIZE);

  return _.difference(deck, lastPlayedHand);
}

function generateTestCase(idx) {
  const randomDeck = _.sampleSize(cards, MAX_DECK_SIZE);
  const currentHand = _.sampleSize(randomDeck, HAND_SIZE);
  const drawPile = _.difference(randomDeck, currentHand);

  // Generate TURN_COUNT turns
  // Each turn:
  // - Play random card in our hand
  // - Put the played card on the top of the draw pile
  // - Draw the bottom card of the draw pile into the hand
  const playsSoFar = [];

  for (let turn = 0; turn < TURN_COUNT; turn++) {
    const cardToPlay = _.sample(currentHand);
    _.pull(currentHand, cardToPlay);
    drawPile.push(cardToPlay);
    const nextToDraw = drawPile.shift();
    currentHand.push(nextToDraw);
    playsSoFar.push(cardToPlay);
  }

  return [idx, playsSoFar];
}

// describe('getCurrentHand', () => {
//   _.chain(range(RANDOM_TEST_CASE_COUNT))
//     .map(generateTestCase)
//     .forEach(([testCaseIndex, testCase]) => {
//       it(`Random test ${testCaseIndex + 1}`, () => {
//         const actualTestCase = [...testCase];
//         const actual = getCurrentHand(actualTestCase);
//         console.log('actual ', actual);

//         const expectedTestCase = [...testCase];
//         const expected = getExpectedResult(expectedTestCase);
//         console.log('expected ', expected);

//         assert.deepEqual(new Set(actual), new Set(expected));
//       });
//     })
//     .value();
// });

describe('getCurrentHand', () => {
  _.chain(range(RANDOM_TEST_CASE_COUNT))
    .map(generateTestCase)
    .forEach(([testCaseIndex, testCase]) => {
      it(`Random test ${testCaseIndex + 1}`, () => {
        const actual = getCurrentHand([...testCase]);
        const expected = getExpectedResult(testCase);

        assert.equal(JSON.stringify(actual.sort()), JSON.stringify(expected.sort()));
      });
    })
    .value();
});
