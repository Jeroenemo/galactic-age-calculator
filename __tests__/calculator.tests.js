import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should create player object with the passed in argument and fixed values', () => {
    expect(calculator).toEqual({age: 30, lifeSpan: 95, planetYears: {'Mercury': 0.24, 'Venus': 0.62, 'Earth': 1, 'Mars': 1.88, 'Jupiter': 11.86}});
  });
  test('should return user age in Mercury years', () => {
    expect(calculator.ageOnPlanet('Mercury')).toEqual("On Mercury you are 125 years old!");
  });
  test('should return user age in Venus years', () => {
    expect(calculator.ageOnPlanet('Venus')).toEqual("On Venus you are 48 years old!");
  });
  test('should return user age in Earth years', () => {
    expect(calculator.ageOnPlanet('Earth')).toEqual("On Earth you are 30 years old!");
  });
  test('should return user age in Mars years', () => {
    expect(calculator.ageOnPlanet('Mars')).toEqual("On Mars you are 15 years old!");
  });
  test('should return user age in Jupiter years', () => {
    expect(calculator.ageOnPlanet('Jupiter')).toEqual("On Jupiter you are 2 years old!");
  });
  test('should calculate life expectancy depending on diet', () => {
    calculator.lifeExpectancy(false, true, true);
    expect(calculator.lifeSpan).toEqual(90);
  });
  test('should calculate life expectancy depending on exercise', () => {
    calculator.lifeExpectancy(true, false, true, false, false);
    expect(calculator.lifeSpan).toEqual(90);
  });
  test('should calculate life expectancy depending on seatbelt use', () => {
    calculator.lifeExpectancy(true, true, false, false, false);
    expect(calculator.lifeSpan).toEqual(75);
  });
  test('should calculate life expectancy depending on smoking', () => {
    calculator.lifeExpectancy(true, true, true, true, false);
    expect(calculator.lifeSpan).toEqual(85);
  });
  test('should calculate life expectancy depending on drinking', () => {
    calculator.lifeExpectancy(true, true, true, false, true);
    expect(calculator.lifeSpan).toEqual(85);
  });
  test('should return years left if planet is mercury', () => {
    expect(calculator.yearsLeft("Mercury")).toEqual("You have 270 years to live!");
  });
  test('should return years left if planet is venus', () => {
    expect(calculator.yearsLeft("Venus")).toEqual("You have 104 years to live!");
  });
  test('should return years left if planet is earth', () => {
    expect(calculator.yearsLeft("Earth")).toEqual("You have 65 years to live!");
  });
  test('should return years left if planet is mars', () => {
    expect(calculator.yearsLeft("Mars")).toEqual("You have 34 years to live!");
  });
});