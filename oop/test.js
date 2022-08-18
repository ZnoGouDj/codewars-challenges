function undoRedo(object) {
    let state = [object];
    let currentState = object;
    let currentIndex = 0;

    return {
        set: function(key, value) {
            let newObj = {
                ...currentState,
            };
            newObj[key] = value;
            // object[key] = value; //?
            currentState = newObj;
            state.push(newObj);
            object = {
                ...currentState,
            };

            currentIndex++;
        },
        get: function(key) {
            console.log('cur_index ', currentIndex, 'state.length ', state.length);
            return currentState[key];
        },
        del: function(key) {
            let newObj = {
                ...currentState,
            };
            delete newObj[key];
            // delete object[key]; //?
            currentState = newObj;
            state.push(newObj);
            object = {
                ...currentState,
            };

            currentIndex++;
        },
        undo: function() {
            if (state.length > 1 && currentIndex >= 1) {
                console.log('UNDO');
                currentIndex--;
                currentState = state[currentIndex];
            } else {
                throw new Error('No operation to undo');
            }
        },
        redo: function() {
            if (currentIndex < state.length - 1) {
                console.log('REDO');
                currentIndex++;
                currentState = state[currentIndex];
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

//? simple undo
// unRe.set('y', 10);
// console.log(unRe.get('y')); // => 10, 'The get method returns the value of a key');
// unRe.undo();
// console.log(unRe.get('y')); // => 2, 'The undo method restores the previous state');

// unRe.undo(); // 'It should have thrown an exception'

// console.log(unRe.get('y')); // => 2

//? undo/redo
// unRe.set('y', 10);
// unRe.set('y', 100);
// unRe.set('x', 150);
// unRe.set('x', 50);
// console.log(unRe.get('y')); // => 100, 'The get method returns the value of a key');
// console.log(unRe.get('x')); // => 50, 'The get method returns the value of a key');
// unRe.undo();
// console.log(unRe.get('x')); // => 150, 'The undo method restores the previous state');
// console.log(unRe.get('y')); // => 100, 'The y key stays the same');
// unRe.redo();
// console.log(unRe.get('x')); // => 50, 'Undo the x value');
// console.log(unRe.get('y')); // => 100, 'The y key stays the same');
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('x')); // => 1, 'Undo the x value');
// console.log(unRe.get('y')); // => 100, 'The y key stays the same');
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('y')); // => 2, 'Undo the y value');
// console.log(unRe.get('x')); // => 1, 'The x key stays the same');

// // unRe.undo(); // 'It should have thrown an exception'

// console.log(unRe.get('y')); // => 2, 'There is nothing to undo');

// unRe.redo();
// unRe.redo();
// unRe.redo();
// unRe.redo();

// console.log(unRe.get('y')); // => 100, 'y key redo state');
// console.log(unRe.get('x')); // => 50, 'y key redo state');

// unRe.redo(); // 'It should have thrown an exception'

// console.log(unRe.get('y')); // => 100, 'There is nothing to redo');

//? DELETE KEY
unRe.del('x');
console.log(unRe.get('x')); // => undefined, 'The x key should not exist');
console.log(!obj.hasOwnProperty('x')); // => true
unRe.undo();
console.log(unRe.get('x')); // => 1, 'A new key has been added');
unRe.redo();
console.log(unRe.get('x')); // => undefined, 'The x key should not exist');
console.log(!obj.hasOwnProperty('x')); // => true, 'The x key should be deleted');

//! works a bit more
// function undoRedo(object) {
//   let state = [object];
//   let currentState = object;
//   let ableToRedo = false;
//   let currentIndex = 2;

//   return {
//       set: function(key, value) {
//           let newObj = {
//               ...currentState,
//           };
//           newObj[key] = value;
//           currentState = newObj;
//           state.push(newObj);
//           ableToRedo = false;
//           currentIndex = 2;
//       },
//       get: function(key) {
//           return currentState[key];
//       },
//       del: function(key) {
//           let newObj = {
//               ...currentState,
//           };
//           delete newObj[key];
//           currentState = newObj;
//           state.push(newObj);
//           ableToRedo = false;
//           currentIndex = 2;
//       },
//       undo: function() {
//           if (state.length > 1) {
//               currentState = state[state.length - currentIndex];
//               currentIndex++;
//               ableToRedo = true;
//           } else {
//               throw new Error('No operation to undo');
//           }
//       },
//       redo: function() {
//           if (state.length - currentIndex + 2 <= state.length - 1) {
//               currentState = state[state.length - currentIndex + 2];
//               currentIndex--;
//               ableToRedo = false;
//           } else {
//               throw new Error('No operation to redo');
//           }
//       },
//   };
// }