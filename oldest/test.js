function leveling(level, amount) {
  let amountsFromLevel7 = [50, 100, 200, 400, 500, 750, 1250];
  let localLevel = level - 7;

  let outputLevel = level;
  let outputAmount = amount;

  for (let i = localLevel; i < amountsFromLevel7.length; i++) {
    if (outputAmount - amountsFromLevel7[i] >= 0) {
      outputLevel++;
      outputAmount -= amountsFromLevel7[i];
    } else {
      return `${outputLevel} level & ${outputAmount} cards`;
    }
  }
  return `${outputLevel} level & ${outputAmount} cards`;
}

// return level and amount after upgrades
//! Ice Golem
console.log(leveling(11, 1042)); // => 12 level & 542 cards || 208 more
//! Battle Healer
console.log(leveling(7, 1775)); // => 12 level & 525 cards || 225 more
//! Zappies
console.log(leveling(10, 1417)); // => 12 level & 517 cards || 233 more
//! Elixir Golem
console.log(leveling(7, 1744)); // => 12 level & 494 cards || 256 more
//! Goblin Cage
console.log(leveling(7, 1593)); // => 12 level & 343 cards || 407 more
//! Royal Hogs
console.log(leveling(9, 1106)); // => 12 level & 6 cards || 744 more

//! Barbarian Hut
console.log(leveling(9, 1897)); // => 13 level & 47 cards || 47 redundant (-4700 gold)
//! Tombstone
console.log(leveling(9, 1942)); // => 13 level & 92 cards || 92 redundant (-9200 gold)
//! Flying Machine
console.log(leveling(11, 1368)); // => 13 level & 118 cards || 118 redundant (-11800 gold)
//! Bomb Tower
console.log(leveling(9, 1992)); // => 13 level & 142 cards || 142 redundant (-14200 gold)
//! Heal Spirit
console.log(leveling(11, 1548)); // => 13 level & 298 cards || 298 redundant (-29800 gold)

// 88697 + 100 = 88797 should be after donate
