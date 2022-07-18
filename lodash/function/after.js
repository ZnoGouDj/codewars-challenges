function after(n, func) {
  return 0;
}

// this method creates a function that invokes func once it's called n or more times.

var saves = ['profile', 'settings'];

var done = after(saves.length, function () {
  console.log('done saving!');
});

_.forEach(saves, function (type) {
  asyncSave({ type: type, complete: done });
});
// => Logs 'done saving!' after the two async saves have completed.
