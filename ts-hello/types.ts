let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];
enum Color { Red, Green, Blue };

/**custom types */

//lets suppose we have a function  that needs to draw a point with x, y coords
//we can construct the arrow function like this

let drawPoint = (point: { x: number, y: number }) => {
    //draw point
}

//this method is too verbose, so we should use interfaces instead
interface Point {
    x: number,
    y: number
}

drawPoint = (point: Point) => {
    //draws point
}