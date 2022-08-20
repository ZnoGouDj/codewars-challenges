function undoRedo(object) {
  const state = [
    {
      ...object,
    },
  ];
  const redoCache: object[] = [];

  let currentIndex = 0;
  let allowRedos = false;

  return {
    set: function (key, value) {
      object[key] = value;
      state.push({
        ...object,
      });

      currentIndex++;
      redoCache.length = 0;
      allowRedos = false;
    },
    get: function (key) {
      return state[currentIndex][key];
    },
    del: function (key) {
      delete object[key];
      state.push({
        ...object,
      });

      currentIndex = state.length - 1;
      redoCache.length = 0;
      allowRedos = false;
    },
    undo: function () {
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
    redo: function () {
      state.push(redoCache[redoCache.length - 1]);
      if (currentIndex < state.length - 1 && allowRedos) {
        redoCache.length = redoCache.length - 1;
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
