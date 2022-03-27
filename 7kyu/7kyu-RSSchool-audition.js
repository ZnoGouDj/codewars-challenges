//      Test.assertSimilar(transform('helloworld'), '1133212101');
//      Test.assertSimilar(transform('jsjsjsjsjsjsj'), '7676007676007');

function transform(string) {
}

// Returns the amount of times letter is included in the str
function getCount(str, letter) {
    return Array
        .from(str)
        .reduce((count, strLetter) => count + (strLetter === letter ? 1 : 0), 0);
}


// O(N^2)
function transform(str) {
    return Array
        .from(str)
        .map(letter => getCount(str, letter))
        .join('');
}

function getCounts(stringArray) {
    return stringArray
        .reduce((countsAcc, letter) => {
            return {
                ...countsAcc,
                [letter]: (countsAcc[letter] || 0) + 1
            };
        }, {});
}

// 'jsjsjsjsjsjsj' -> '7676007676007'
function transform2(str) {
    const stringArray = Array.from(str);
    const counts = getCounts(stringArray);
    return stringArray
        .reduce((config, letter) => {
            return {
                stringSoFar: config.stringSoFar + ((config.encounters[letter] % 3 === 2) ? '0' : counts[letter].toString()),
                encounters: {
                    ...config.encounters,
                    [letter]: (config.encounters[letter] || 0) + 1
                }
            };
        }, { stringSoFar: '', encounters: {} })
        .stringSoFar;
}

console.log(transform2('helloworld'))