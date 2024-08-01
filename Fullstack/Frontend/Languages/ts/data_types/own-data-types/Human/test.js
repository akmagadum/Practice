var human = /** @class */ (function () {
    function human() {
        this.head = 1;
        this.eyes = 2;
        this.ears = 2;
        this.nose = 1;
        this.hand = 2;
        this.nachiki = true;
    }
    human.prototype.withnose = function () {
        return this.nose;
    };
    return human;
}());
var akm = new human();
console.log(akm.eyes);
console.log(akm.withnose());
