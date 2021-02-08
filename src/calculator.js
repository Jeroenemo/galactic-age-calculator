export default class Calculator {
  constructor(age) {
    this.age = age;
    this.lifeSpan = 95;
    this.planetYears = {
      'Mercury': 0.24,
      'Venus': 0.62,
      'Earth': 1,
      'Mars': 1.88,
      'Jupiter': 11.86
    };
  }lifeExpectancy(diet, exercise, seatbelt, smoke, drink) {
    if (diet === 'false'){
      this.lifeSpan -= 5;
    }
    if (exercise === 'false'){
      this.lifeSpan -= 5;
    }
  }
  ageOnPlanet(planet) {
    return (`On ${[planet]} you are ${Math.floor(this.age / this.planetYears[planet])} years old!`);
  }
}