export default class Calculator {
  constructor(age) {
    this.age = age;
    this.lifeSpan = 90;
    this.planetYears = {
      'Mercury': 0.24,
      'Venus': 0.62,
      'Earth': 1,
      'Mars': 1.88,
      'Jupiter': 11.86
    };
  }
}