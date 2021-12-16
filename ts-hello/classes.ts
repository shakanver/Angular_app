class Point {

    //exclusive keyword to make a class constructor
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }

    //this is a cleaner way of doing getters and setters than using normal methods 
    //note, this only works if you use es5 version of js during transpile

    get X() {
        return this.x;
    }

    set X(new_x: number) {
        this.x = new_x;
    }
}

let point = new Point(1, 2);
let x = point.X;
point.draw();
point.X = 2;
point.draw();
