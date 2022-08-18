function undoRedo(object) {
    let state = [{
        ...object,
    }, ];
    let currentIndex = 0;

    return {
        set: function(key, value) {
            object[key] = value;
            state.push({
                ...object,
            });
            currentIndex++;
        },
        get: function(key) {
            return state[currentIndex][key];
        },
        del: function(key) {
            delete object[key];
            state.push({
                ...object,
            });
            currentIndex++;
        },
        undo: function() {
            if (currentIndex >= 1) {
                currentIndex--;
            } else {
                throw new Error('Nothing to undo');
            }
        },
        redo: function() {
            if (currentIndex < state.length - 1) {
                currentIndex++;
            } else {
                throw new Error('Nothing to redo');
            }
        },
    };
}