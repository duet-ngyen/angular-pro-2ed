import * as NameAndWeatherLocation from "./modules/NameAndWeather"
import {Name as OtherName} from "./modules/DuplicateName";
import { TempConverter } from "./tempConverter";

let name = new NameAndWeatherLocation.Name("duyet", "nguyen");
let loc = new NameAndWeatherLocation.WeatherLocation("rain", "london");
let otherName = new OtherName();

console.log(name.nameMessage);
console.log(loc.WeatherMessage);
console.log(otherName.message);

let t = TempConverter.convertFtoC("12");

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
