export class Name{
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  get nameMessage(){
    return `Hello ${this.first} ${this.second}`;
  }
}

export class WeatherLocation{
  constructor(weather, location){
    this.weather = weather;
    this.location = location;
  }

  get WeatherMessage(){
    return `It is ${this.weather} in ${this.location}`
  }
}
