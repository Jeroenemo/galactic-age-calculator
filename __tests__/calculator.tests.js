import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should create player object with the passed in argument and fixed values', () => {
    expect(calculator).toEqual({age: 30, lifeSpan: 95, planetYears: {'Mercury': 0.24, 'Venus': 0.62, 'Earth': 1, 'Mars': 1.88, 'Jupiter': 11.86}});
  });
});