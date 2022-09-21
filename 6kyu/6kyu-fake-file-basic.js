class File {
    constructor(fullName, contents) {
        this.fullName = fullName;
        this.contents = contents;
        this.contentsArr = contents.split('').includes('\n') ? contents.split('\n') : [contents];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(v) {
        if (this._fullName === undefined) {
            this._fullName = v;
        }
    }

    get filename() {
        return this.fullName.split('.').slice(0, -1).join('.');
    }

    get extension() {
        return this.fullName.split('.').slice(-1)[0];
    }

    getContents() {
        return this.contents;
    }

    write(val) {
        this.contents += `\n${val}`;
        if (this.contents[0] === '\n') {
            this.contents = this.contents.replace('\n', '');
        }
        if (val[0] === '\n') {
            val = val.replace('\n', '');
        }

        this.contentsArr.push(...val.split('\n'));
    }

    gets() {
        this.contentsArr = this.contentsArr.filter((el) => el.length > 0);
        return this.contentsArr.shift();
    }

    getc() {
        let piece = this.contents.split('')[0];
        this.contents = this.contents.split('').slice(1).join('');
        return piece;
    }
}

//!

class File {
    constructor(fullName, contents) {
        var _fullName = fullName;
        this.countWords = 0;
        this.countSym = 0;
        this.contents = contents;
        this.getName = () => _fullName;
        this.getContents = () => this.contents;
        this.write = (str) =>
            this.contents != '' ? (this.contents = `${this.contents}\n${str}`) : (this.contents = `${str}`);
        this.gets = () => this.contents.split('\n')[this.countWords++];
        this.getc = () => this.contents.split('')[this.countSym++];
        this.arr = this.getName().split('.');
    }
    get fullName() {
        return this.getName();
    }
    get filename() {
        return this.arr.filter((item, i) => i != this.arr.length - 1).join('.');
    }
    get extension() {
        return this.arr[this.arr.length - 1];
    }
}

var example = new File('example.txt', 'An example file');
console.log(example.fullName); // => 'example.txt');
console.log(example.filename); // => 'example');
console.log(example.extension); // => 'txt');
example.fullName = 'modified.txt';
console.log(example.fullName); //! => NOT 'modified.txt');
console.log(example.fullName); // => 'example.txt');
example.filename = 'hacked';
console.log(example.filename); //! => NOT 'hacked');
console.log(example.filename); // => 'example');
example.extension = 'locky';
console.log(example.extension); //! => NOT 'locky');
console.log(example.extension); // => 'txt');
console.log(example.getContents()); // => 'An example file');
example.write('Hello World');
console.log(example.getContents()); // => 'An example file\nHello World');
example.write('This is an example file provided to you by the Kata author');
console.log(example.getContents()); // => 'An example file\nHello World\nThis is an example file provided to you by the Kata author',
example.write('This example file is used as an example test case.');
console.log(example.getContents()); // => 'An example file\nHello World\nThis is an example file provided to you by the Kata author\nThis example file is used as an example test case.',
console.log(example.gets()); // => 'An example file');
console.log(example.gets()); // => 'Hello World');
console.log(example.gets()); // => 'This is an example file provided to you by the Kata author');
console.log(example.gets()); // => 'This example file is used as an example test case.');
console.log(example.gets()); // => undefined);
console.log(example.gets()); // => undefined);
console.log(example.gets()); // => undefined);
console.log(example.getc()); // => 'A');
console.log(example.getc()); // => 'n');
console.log(example.getc()); // => ' ');
console.log(example.getc()); // => 'e');
console.log(example.getc()); // => 'x');
console.log(example.getc()); // => 'a');
console.log(example.getc()); // => 'm');
console.log(example.getc()); // => 'p');
console.log(example.getc()); // => 'l');
console.log(example.getc()); // => 'e');
for (let i = 0; i < 1000; i++) {
    example.getc();
}
console.log(example.getc()); // => undefined);
console.log(example.getc()); // => undefined);
console.log(example.getc()); // => undefined);