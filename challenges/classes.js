// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(length, height, width) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        let vol = this.length * this.width * this.height;
        return vol;
    }
    surfaceArea() {
       let surf =  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
       return surf;
    }
}

let cuboid1 = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMakerClass {
    constructor(length, width, height) {
        super(length, width, height);
    }
    volume() {
        let vol = Math.pow(this.length, 3);
        return vol;
    }
    surfaceArea() {
        let surf = 6 * (Math.pow(this.length, 2));
        return surf;
    }
}

let cubie = new CubeMaker(5, 5, 5);


console.log(cubie.volume()); //125
console.log(cubie.surfaceArea()); //150