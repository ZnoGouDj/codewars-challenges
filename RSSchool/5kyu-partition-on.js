// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] 
// where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) 
// should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index. 
// In other words: the index of the first T value in items.
// For example:

// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
//      items should now be [1, 3, 5, 2, 4, 6]
//      i     should now be 3

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    let fArray = [];
    let tArray = [];
    items.forEach(function (el) {
        if (pred(el)) {
            tArray.push(el);
        }
        else {
            fArray.push(el);
        }
    });
    items = fArray.concat(tArray);
    return fArray.length, items;
}


function partitionOn(pred, items) {

    var pTrue = [];

    var pFalse = [];

    items.forEach(function (value) {

        if (pred(value)) { pTrue.push(value); }

        else { pFalse.push(value); }
    });

    items = pFalse.concat(pTrue);

    return pTrue.length, items;

}

//new
function partitionOn(pred, items) {
    pFalse = []; pTrue = [];
    for (let i = 0; i < items.length; ++i) {
        if (pred(items[i])) {
            pTrue.push(items[i]);
        } pFalse.push(items[i]);
    }
    for (let j = 0; j < pFalse.length; ++j) {
        items[j] = pFalse[j];
    }
    for (let k = 0; k < pTrue.length; ++k) {
        items[k + pFalse.length] = pTrue[k];
    }
    return pFalse.length;
}

//omg

function partitionOn(pred, items) {
    let leftPartition = [];
    let rightPartition = [];

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        if (!pred(item)) {
            leftPartition.push(item);
        } else {
            rightPartition.push(item);
        }
    }

    items.length = 0;

    for (let i = 0; i < leftPartition.length; i++) {
        items.push(leftPartition[i]);
    }

    for (let i = 0; i < rightPartition.length; i++) {
        items.push(rightPartition[i]);
    }

    return leftPartition.length;
}

//top
function partitionOn(pred, items) {
    var f = items.filter(function (e) { return !pred(e); });
    var t = items.filter(pred);
    items.length = 0;
    for (var i = 0; i < f.length; i++) { items.push(f[i]); }
    for (var i = 0; i < t.length; i++) { items.push(t[i]); }

    return f.length;
}

//top2
function partitionOn(pred, items) {
    var f = items.filter(v => !pred(v));
    var t = items.filter(v => pred(v));
    items.splice(0); items.push(...f); items.push(...t);
    return f.length;
}

