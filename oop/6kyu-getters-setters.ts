function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
}

NamedOne.prototype = {
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(name) {
    var names = name.split(' ');
    if (names.length !== 2) return;
    else {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  },
};

//! or

function NamedOne1(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    set: function (value) {
      var parts = value.split(' ');
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
  });
}

//?

var namedOne = new NamedOne('Naomi', 'Wang');

namedOne.firstName = 'John';
namedOne.lastName = 'Doe';
// ...then...
namedOne.fullName; // -> "John Doe"

// -- And :
namedOne.fullName = 'Bill Smith';
// ...then...
namedOne.firstName; // -> "Bill"
namedOne.lastName; // -> "Smith"

// -- But :
namedOne.fullName = 'Tom'; // -> no : lastName missing
namedOne.fullName = 'TomDonnovan'; // -> no : no space between first & last names
namedOne.fullName; // -> "Bill Smith" (unchanged)
