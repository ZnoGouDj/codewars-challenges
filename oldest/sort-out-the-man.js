function menFromBoys(arr) {
    let evenNum = [];
    let oddNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        } else {
            oddNum.push(arr[i]);
        }
    }
    evenNum.sort(function (a, b) {
        return a - b
    });
    oddNum.sort(function (a, b) {
        return b - a
    })
    let result = evenNum.concat(oddNum);
    let uniq = result.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
    return uniq;
}

//menFromBoys([7,3,14,17])
//menFromBoys([2,43,95,90,37])