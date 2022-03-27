// Task
// Complete function find01 that accepts a argument arr, 
// return a number that is the count of 1 surrounded by 0 or 0 surrounded by 1.

// var arr=[
//     [0,1,1,0,1,1,0,1,0],
//     [1,0,1,0,1,1,0,1,0],
//     [0,1,1,0,0,1,0,1,0],
//     [0,0,1,0,1,0,1,1,0],
//     [0,0,1,0,0,1,0,1,0],
//     [0,0,1,0,1,0,0,1,0],
//     [0,0,1,0,0,1,0,1,0]]
//     Test.assertSimilar(find01(arr) ,5)

function find01(arr) {
    let count = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            if (arr[i][j] !== arr[i][j + 1] && arr[i][j] !== arr[i][j - 1]) {
                if (arr[i][j] !== arr[i-1][j] && arr[i][j] !== arr[i+1][j]) {
                    count++;
                }
            }
        }
    }
    return count;
}

// 0x93387ab49930kf37373
