const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers correctly.', () => {
      expect(calculator.add(2,3)).toBe(5);
    });
  
    test('adds a positive and a negative number correctly.', () => {
      expect(calculator.add(-2,3)).toBe(1);
    });
   
    test('adds two negative numbers correctly.', () => {
      expect(calculator.add(-2,-3)).toBe(-5);
    });
  });

  describe('substract', () =>{
    test('substract two positve numbers correctly', () => {
      expect(calculator.subtract(5,3)).toBe(2);
    });

    test('substract a positve and a negative number correctly', () => {
      expect(calculator.subtract(5,-3)).toBe(8);
    });

    test('substract two negative numbers correctly', () => {
      expect(calculator.subtract(-5,-3)).toBe(-2);
    });
  });

  describe('divide', () =>{
    test('divide two positve numbers correctly', () => {
      expect(calculator.divide(6,3)).toBe(2);
    });

    test('divide a positve and a negative number correctly', () => {
      expect(calculator.divide(6,-3)).toBe(-2);
    });

    test('divide two negative numbers correctly', () => {
      expect(calculator.divide(-6,-3)).toBe(2);
    });
  });

  describe('multiply', () =>{
    test('multiply two positve numbers correctly', () => {
      expect(calculator.multiply(6,3)).toBe(18);
    });

    test('multiply a positve and a negative number correctly', () => {
      expect(calculator.multiply(6,-3)).toBe(-18);
    });

    test('multiply two negative numbers correctly', () => {
      expect(calculator.multiply(-6,-3)).toBe(18);
    });
  });

});