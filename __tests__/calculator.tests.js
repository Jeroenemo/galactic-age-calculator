describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should create player object with the passed in argument and fixed values', () => {
    expect(calculator).toEqual({age: 30, lifeSpan: 95, planetYears: {'mercury': 0.24, 'venus': 0.62, 'earth': 1, 'mars': 1.88, 'jupiter': 11.86}});
  });
});