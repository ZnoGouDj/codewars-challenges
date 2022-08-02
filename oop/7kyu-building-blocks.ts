class Block {
  width: number;
  length: number;
  height: number;

  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      this.height * this.width * 2 + this.length * this.height * 2 + this.width * this.length * 2
    );
  }
}

//! or

class Block1 {
  w: number;
  l: number;
  h: number;

  constructor(data: number[]) {
    [this.w, this.l, this.h] = data;
  }
  getWidth() {
    return this.w;
  }
  getLength() {
    return this.l;
  }
  getHeight() {
    return this.h;
  }
  getVolume() {
    let { l, w, h } = this;
    return w * l * h;
  }
  getSurfaceArea() {
    let { l, w, h } = this;
    return 2 * (l * w + l * h + w * h);
  }
}

//?

let block = new Block([2, 4, 6]);

console.log(block.getWidth()); // =>  2
console.log(block.getLength()); // => 4
console.log(block.getHeight()); // => 6
console.log(block.getVolume()); // => 48
console.log(block.getSurfaceArea()); // => 88
