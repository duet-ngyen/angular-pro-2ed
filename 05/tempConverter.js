"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        var result = TempConverter.performCalculation(value).toFixed(1);
        return result;
    };
    TempConverter.performCalculation = function (value) {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
