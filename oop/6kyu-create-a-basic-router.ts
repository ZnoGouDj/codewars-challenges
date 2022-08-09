var Router = function () {
  let obj = {};

  this.bind = (binding, method, action) => {
    obj[binding + method] = action();
  };

  this.runRequest = (binding, method) => {
    return obj[binding + method] || 'Error 404: Not Found';
  };
};

//! or

class Router1 {
  routes: any;

  constructor() {
    this.routes = new Map();
  }

  bind(url, method, action) {
    this.routes.set(url + ':' + method, action);
  }

  runRequest(url, method) {
    if (!this.routes.has(url + ':' + method)) {
      return 'Error 404: Not Found';
    }
    return this.routes.get(url + ':' + method)();
  }
}

var router = new Router();

router.bind('/hello', 'GET', function () {
  return 'hello world';
});
console.log(router.runRequest('/hello', 'GET')); // => 'hello world';

router.bind('/login', 'GET', function () {
  return 'Please log-in.';
});
console.log(router.runRequest('/login', 'GET')); // => 'Please log-in.'

router.bind('/login', 'GET', function () {
  return 'Please log-in.';
});
router.bind('/login', 'POST', function () {
  return 'Logging-in.';
});

console.log(router.runRequest('/login', 'GET')); // => 'Please log-in.'
console.log(router.runRequest('/login', 'POST')); // => 'Logging-in.'
