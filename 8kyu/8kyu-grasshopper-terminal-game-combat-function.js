// Create a combat function that takes the player's current health 
// and the amount of damage recieved, 
// and returns the player's new health. Health can't be less than 0.

// Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");

function combat(health, damage) {
    return damage > health ? 0 : health - damage;
}

const combat = (health, damage) => damage > health ? 0 : health - damage; 

//top2

const combat = (health, damage) => Math.max(0, health - damage);