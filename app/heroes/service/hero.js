"use strict";
var Hero = (function () {
    function Hero(id, name, power, 
        //  here ? means this param is optional
        alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map