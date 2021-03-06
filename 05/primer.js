"use strict";
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./tempConverter");
var name = new NameAndWeatherLocation.Name("duyet", "nguyen");
var loc = new NameAndWeatherLocation.WeatherLocation("rain", "london");
var otherName = new DuplicateName_1.Name();
console.log(name.nameMessage);
console.log(loc.WeatherMessage);
console.log(otherName.message);
var t = tempConverter_1.TempConverter.convertFtoC(38);
console.log(t);
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
for (var key in cities) {
    console.log(key + " is " + cities[key][0] + " and temp about " + cities[key][1]);
}
// class MyClass{
//   constructor(name, weather){
//     this.name = name;
//     this._weather = weather;
//   }
//   get get_name(){
//     return `Mr ${this.name}`;
//   }
//   set weather(value){
//     this._weather = value;
//   }
//   get weather(){
//     return `Today is ${this._weather}`;
//   }
//   printMessage(){
//     console.log("Hello " + this.get_name+".");
//     console.log(this.weather);
//   }
// }
// class MySubClass extends MyClass{
//   constructor(name, weather, city){
//     super(name, weather);
//     this.city = city;
//   }
//   printMessage(){
//     super.printMessage();
//     console.log(`Your city: ${this.city}`);
//   }
// }
// let myData = new MyClass("tom", "sunny");
// myData.printMessage();
// let mySubData = new MySubClass("jerry", "rain", "hanoi");
// mySubData.printMessage();
