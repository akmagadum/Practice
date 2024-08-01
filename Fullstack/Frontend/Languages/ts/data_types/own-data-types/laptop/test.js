var laptop = /** @class */ (function () {
    function laptop() {
        this.screen = 1;
        this.keyboard = 1;
        this.enterkeys = 2;
        this.shiftkeys = 2;
        this.usbport = 2;
        this.hdmiport = 1;
    }
    laptop.prototype.withhdmiport = function () {
        return this.keyboard;
    };
    return laptop;
}());
var printt = new laptop();
console.log(printt.enterkeys);
console.log(printt.hdmiport);
console.log(printt.keyboard);
console.log(printt.screen);
console.log(printt.usbport);
console.log(printt.withhdmiport());
