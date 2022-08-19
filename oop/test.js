function undoRedo(object) {
    let state = [{
        ...object,
    }, ];
    let currentIndex = 0;
    let allowRedos = false;

    let redoCache = [];

    return {
        set: function(key, value) {
            console.log('SET: ', key, value);
            object[key] = value;
            state.push({
                ...object,
            });
            currentIndex++;
            redoCache.length = 0;
            // currentIndex = state.length - 1;
            console.log('STATE: ', state);
            allowRedos = false;
        },
        get: function(key) {
            return state[currentIndex][key];
        },
        del: function(key) {
            console.log('DEL: ', key);

            delete object[key];
            state.push({
                ...object,
            });
            // currentIndex++;
            currentIndex = state.length - 1;
            redoCache.length = 0;

            console.log('STATE: ', state);

            allowRedos = false;
        },
        undo: function() {
            console.log('UNDO');
            if (currentIndex >= 1) {
                redoCache.push(state[state.length - 1]);
                state.length = state.length - 1;

                currentIndex--;
                for (let key in object) {
                    delete object[key];
                }
                for (let key in state[currentIndex]) {
                    object[key] = state[currentIndex][key];
                }

                allowRedos = true;
            } else {
                throw new Error('Nothing to undo');
            }
        },
        redo: function() {
            console.log('REDO');
            console.log('REDO-CACHE', redoCache);
            state.push(redoCache[redoCache.length - 1]);
            if (currentIndex < state.length - 1 && allowRedos) {
                currentIndex++;

                for (let key in object) {
                    delete object[key];
                }
                for (let key in state[currentIndex]) {
                    object[key] = state[currentIndex][key];
                }
            } else {
                throw new Error('Nothing to redo');
            }
        },
    };
}

const stateGlob = [{},
    {
        x: 5,
    },
    {
        x: 5,
        y: 6,
    },
    {
        x: 5,
        y: 66,
    },
];

var obj = {};

var unRe = undoRedo(obj);

unRe.set('x', 5);
unRe.set('y', 6);
unRe.undo();
unRe.set('y', 66);
// unRe.redo(); // nothing to redo
unRe.undo();
console.log(obj); // { x: 5 }
unRe.redo();
console.log(obj); // { x: 5, y: 66 }

//?

// function undoRedo(object) {
//   let state = [{
//       ...object,
//   }, ];
//   let currentIndex = 0;
//   let allowRedos = false;

//   return {
//       set: function(key, value) {
//           console.log('SET: ', key, value);
//           object[key] = value;
//           state.push({
//               ...object,
//           });
//           currentIndex++;
//           // currentIndex = state.length - 1;
//           console.log('STATE: ', state);
//           allowRedos = false;
//       },
//       get: function(key) {
//           return state[currentIndex][key];
//       },
//       del: function(key) {
//           console.log('DEL: ', key);

//           delete object[key];
//           state.push({
//               ...object,
//           });
//           // currentIndex++;
//           currentIndex = state.length - 1;

//           console.log('STATE: ', state);

//           allowRedos = false;
//       },
//       undo: function() {
//           console.log('UNDO');
//           if (currentIndex >= 1) {
//               currentIndex--;
//               for (let key in object) {
//                   delete object[key];
//               }
//               for (let key in state[currentIndex]) {
//                   object[key] = state[currentIndex][key];
//               }

//               allowRedos = true;
//           } else {
//               throw new Error('Nothing to undo');
//           }
//       },
//       redo: function() {
//           console.log('REDO');

//           if (currentIndex < state.length - 1 && allowRedos) {
//               currentIndex++;

//               for (let key in object) {
//                   delete object[key];
//               }
//               for (let key in state[currentIndex]) {
//                   object[key] = state[currentIndex][key];
//               }
//           } else {
//               throw new Error('Nothing to redo');
//           }
//       },
//   };
// }