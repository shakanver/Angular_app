var Point = /** @class */ (function () {
    //exclusive keyword to make a class constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        //this is a cleaner way of doing getters and setters than using normal methods
        get: function () {
            return this.x;
        },
        set: function (new_x) {
            this.x = new_x;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.X;
point.draw();
point.X = 2;
point.draw();
