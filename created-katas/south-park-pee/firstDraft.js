//? Description

/*
One summer day Kyle and his friends arrive at [Pi Pi's Splashtown](https://en.wikipedia.org/wiki/Pee_(South_Park)), the local waterpark. 
Kyle is incredibly repulsed to learn so many people freely urinate in the pools.

Given the **initial pee level** and **people amount**. Help Kyle to check if the pee levels are acceptable **(<= 83%)**.

One in three people admit they pee in pools.</br>
Add another for people who do but don't admit it, that's **two in three.**</br>
So if we've got 300 people in the waterpark that's 200 people urinating in the water.</br>
Every single urinating process increases the current pee level by **0.01%**. 

```code 
getCurrentPeeLevel(300, 81); // -> 83% -> return true
getCurrentPeeLevel(15000, 0); // -> 100% -> return false
```

There will always be a correct input. </br> **Math.floor** the resulting percent. 
*/

//? Rnd tests
const assert = require('chai').assert;

const RANDOM_TEST_CASE_COUNT = 100;

function getExpectedResult(people, peeLevel) {
    let urinatingPeople = (people / 3) * 2;
    let urineIncrease = urinatingPeople * 0.01;

    return Math.floor(urineIncrease + peeLevel) <= 83;
}

//? generator

function randomInteger(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let params = []; // [[ 25, 8795 ], [ 59, 859 ],  [ 63, 754 ],  [ 67, 9346 ], [ 30, 7880 ]]

for (let i = 0; i < RANDOM_TEST_CASE_COUNT; i++) {
    params.push([randomInteger(0, 1000), randomInteger()]);
}

//? APPLY FUNCTION
for (let i = 0; i < params.length; i++) {
    describe('getCurrentPeeLevel', function() {
        it('random tests', function() {
            let attempt = getCurrentPeeLevel(...params[i]);
            let answer = getExpectedResult(...params[i]);

            assert.equal(attempt, answer);
        });
    });
}

//? Example tests

const assert = require('chai').assert;

describe('getCurrentPeeLevel', function() {
    it('basic tests', function() {
        assert.equal(getCurrentPeeLevel(300, 81), true);
        assert.equal(getCurrentPeeLevel(15000, 0), false);
    });
});