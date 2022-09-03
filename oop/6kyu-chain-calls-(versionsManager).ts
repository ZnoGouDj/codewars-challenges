const vm = function (version = '0.0.1') {
  // validation input
  if (!version.length) version = '0.0.1';
  let fixedVersion = version.split('.');
  if (fixedVersion.length < 2) fixedVersion[1] = '0';
  if (fixedVersion.length < 3) fixedVersion[2] = '0';
  fixedVersion.length = 3;
  if (!fixedVersion.every((el) => /\d/.test(el))) throw new Error('Error occured while parsing version!');

  return {
    history: [],
    setupVersion: {
      major: +fixedVersion[0],
      minor: +fixedVersion[1],
      patch: +fixedVersion[2],
    },
    major() {
      return this.upgrade('major');
    },
    minor() {
      return this.upgrade('minor');
    },
    patch() {
      return this.upgrade('patch');
    },
    upgrade(option) {
      this.history.push({
        ...this.setupVersion,
      });

      if (option === 'patch') {
        this.setupVersion.patch += 1;
      } else if (option === 'minor') {
        this.setupVersion.minor += 1;
        this.setupVersion.patch = 0;
      } else if (option === 'major') {
        this.setupVersion.major += 1;
        this.setupVersion.minor = 0;
        this.setupVersion.patch = 0;
      }

      return this;
    },
    rollback() {
      if (this.history.length) {
        let lastVersion = this.history.pop();
        this.setupVersion.major = lastVersion.major;
        this.setupVersion.minor = lastVersion.minor;
        this.setupVersion.patch = lastVersion.patch;
        return this;
      } else {
        throw new Error('Cannot rollback!');
      }
    },
    release() {
      return Object.values(this.setupVersion).join('.');
    },
  };
};

//?
console.log(vm().major().rollback().release()); // => '0.0.1'
console.log(vm().minor().rollback().release()); // => '0.0.1'
console.log(vm().patch().rollback().release()); // => '0.0.1'
console.log(vm().major().patch().rollback().release()); // => '1.0.0'
console.log(vm().major().patch().rollback().major().rollback().release()); // => '1.0.0'

//! 1
// console.log(vm().release()); // => '0.0.1', 'Default initial version'
// console.log(vm('').release()); // => '0.0.1', 'Default initial version'
// console.log(vm('1.2.3').release()); // => '1.2.3', 'No version changes'
// console.log(vm('1.2.3.4').release()); // => '1.2.3', 'No version changes'
// console.log(vm('1.2.3.d').release()); // => '1.2.3', 'No version changes'
// console.log(vm('1').release()); // => '1.0.0', 'Default minor version is 0'
// console.log(vm('1.1').release()); // => '1.1.0', 'Default patch is 0'

//! 2
// console.log(vm().major().release()); // => '1.0.0'
// console.log(vm('1.2.3').major().release()); // => '2.0.0'
// console.log(vm('1.2.3').major().major().release()); // => '3.0.0'

//! 3
// console.log(vm().minor().release()); // => '0.1.0'
// console.log(vm('1.2.3').minor().release()); // => '1.3.0'
// console.log(vm('1').minor().release()); // => '1.1.0'
// console.log(vm('4').minor().minor().release()); // => '4.2.0'

function vm1(version = '0.0.1') {
  function parsePart(part) {
    if (part === undefined) {
      return undefined;
    }

    const value = parseInt(part, 10);
    if (isNaN(value)) {
      throw new Error('Error occured while parsing version!');
    }
    return value;
  }

  if (version.length === 0) {
    version = '0.0.1';
  }

  const parts = version.split('.');
  const major = parsePart(parts[0]);
  const minor = parsePart(parts[1]);
  const patch = parsePart(parts[2]);

  return new Version(major, minor, patch);
}

class Version {
  _history: object[];
  _major: number;
  _minor: number;
  _patch: number;

  constructor(major = 0, minor = 0, patch = 0) {
    this._history = [];
    this._major = major;
    this._minor = minor;
    this._patch = patch;
  }

  _save() {
    this._history.push({
      major: this._major,
      minor: this._minor,
      patch: this._patch,
    });
  }

  major() {
    this._save();
    this._major += 1;
    this._minor = 0;
    this._patch = 0;
    return this;
  }

  minor() {
    this._save();
    this._minor += 1;
    this._patch = 0;
    return this;
  }

  patch() {
    this._save();
    this._patch += 1;
    return this;
  }

  rollback() {
    const value: any = this._history.pop();
    if (value === undefined) {
      throw new Error('Cannot rollback!');
    }

    this._major = value.major;
    this._minor = value.minor;
    this._patch = value.patch;

    return this;
  }

  release() {
    return `${this._major}.${this._minor}.${this._patch}`;
  }
}
