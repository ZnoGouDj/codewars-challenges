function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function (handler) {
  var index = this.handlers.indexOf(handler);

  if (-1 !== handler) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function () {
  var args = arguments;
  this.handlers.forEach(function (handler) {
    handler.apply(null, args);
  });
};
