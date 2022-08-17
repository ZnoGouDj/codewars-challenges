function undoRedo(object) {
    let state = [object];
    let currentState = object;
    let ableToRedo = false;
    let currentIndex = 0; // here

    return {
        set: function(key, value) {
            let newObj = {
                ...currentState,
            };
            newObj[key] = value;
            currentState = newObj;
            state.push(newObj);
            ableToRedo = false;
            currentIndex++;
        },
        get: function(key) {
            return currentState[key];
        },
        del: function(key) {
            let newObj = {
                ...currentState,
            };
            delete newObj[key];
            currentState = newObj;
            state.push(newObj);
            ableToRedo = false;
            currentIndex++;
        },
        undo: function() {
            if (state.length > 1) {
                currentState = state[currentIndex--];
                currentIndex++;
                ableToRedo = true;
            } else {
                throw new Error('No operation to undo');
            }
        },
        redo: function() {
            if (ableToRedo) {
                currentState = state[currentIndex++];
                currentIndex--;
                ableToRedo = false;
            } else {
                throw new Error('No operation to redo');
            }
        },
    };
}

var obj = {
    x: 1,
    y: 2,
};

var unRe = undoRedo(obj);
unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
console.log(unRe.get('y')); // => 100, 'The get method returns the value of a key');
console.log(unRe.get('x')); // => 50, 'The get method returns the value of a key');
unRe.undo();
console.log(unRe.get('x')); // => 150, 'The undo method restores the previous state');
console.log(unRe.get('y')); // => 100, 'The y key stays the same');
unRe.redo();
console.log(unRe.get('x')); // => 50, 'Undo the x value');
console.log(unRe.get('y')); // => 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
console.log(unRe.get('x')); // => 1, 'Undo the x value');
console.log(unRe.get('y')); // => 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
console.log(unRe.get('y')); // => 2, 'Undo the y value');
console.log(unRe.get('x')); // => 1, 'The x key stays the same');