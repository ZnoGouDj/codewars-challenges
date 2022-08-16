function undoRedo(object) {
    let history = [];

    return {
        set: function(key, value) {
            object[key] = value;
            history.push({
                action: 'set',
                key,
                value,
            });
        },
        get: function(key) {
            // history.push({
            //     action: 'get',
            //     key,
            // });
            return obj[key];
        },
        del: function(key) {
            history.push({
                action: 'del',
                key,
            });
            delete object[key];
        },
        undo: function() {
            // console.log(history);
            // console.log(history.pop());
            // console.log(history);
            let last = history.pop();
            console.log('last = ', last.action);
            console.log(this);
            if (last.action === 'set') {
                for (let i = history.length - 1; i > 0; i--) {
                    if (history[i].action === 'set') {
                        return history[i].value;
                    }
                }
            } else if (last.action === 'del') {
                //
            } else {
                throw new Error('No operation to undo');
            }
        },
        redo: function() {},
    };
}

var obj = {
    x: 1,
    y: 2,
};

var unRe = undoRedo(obj);

console.log(unRe.get('x')); // => 1, 'The get method returns the value of a key');
unRe.set('x', 3);
console.log(unRe.get('x')); // => 3, 'The set method change the value of a key');

unRe.set('y', 10);
console.log(unRe.get('y')); // => 10, 'The get method returns the value of a key');
console.log(unRe.undo());
console.log(unRe.get('y')); // => 2, 'The undo method restores the previous state');

// unRe.del('y');
// console.log(unRe.get('y'));