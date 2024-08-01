var bike = /** @class */ (function () {
    function bike() {
        this.engine = 1;
        this.wheel = 2;
        this.indicator = 4;
        this.horn = 1;
    }
    bike.prototype.withwheel = function () {
        return this.wheel;
    };
    return bike;
}());
var data = new bike();
console.log(data);
