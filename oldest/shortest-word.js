function findShort(s) {
    const words = s.split(" ");
    let x = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < x) {
            x = words[i].length;
        }
    }
    return x;
}


