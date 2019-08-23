function removeDuplicateWords(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(arr[i]);
            return arr;
        } 
    }
}

//removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')