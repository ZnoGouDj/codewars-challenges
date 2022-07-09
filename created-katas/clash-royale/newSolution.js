const _ = require('lodash');

function getCurrentHand(input) {
  const deck = _.uniq(input);
  const lastPlayedHand = _.takeRight(input, 4);

  return _.difference(deck, lastPlayedHand);
}
