"use strict";
var Name = (function () {
    function Name(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "Hello " + this.first + " " + this.second;
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    function WeatherLocation(weather, location) {
        this.weather = weather;
        this.location = location;
    }
    Object.defineProperty(WeatherLocation.prototype, "WeatherMessage", {
        get: function () {
            return "It is " + this.weather + " in " + this.location;
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
