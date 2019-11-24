class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return 2 * ((this.height + this.width) * this.length + this.height * this.width)
    }
    get volume() {
        return this.length * this.width * this.height
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

//top
class Cuboid {
    constructor(length, width, height) {
        Object.assign(this, { length, width, height })
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    get volume() {
        return this.length * this.width * this.height
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
}

//top2
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get volume() {
        return this.length * this.width * this.height;
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}