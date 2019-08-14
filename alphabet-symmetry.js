function solve(arr) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        let word = arr[i].toLowerCase();
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (j === alphabet.indexOf(char)) {
                counter += 1;
            }
        }
        finalArray.push(counter);
    }
    return finalArray;
}

//solve(["abode"])