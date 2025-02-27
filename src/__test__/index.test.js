import { add, divide, multiply, subtract } from '../index';

describe('Calculator Util Tests.', () => {
  describe('Addition function tests.', () => {
    it('1 - Should return the sum of the added numbers.', () => {
      const result = add(10, 20);
      const expected = 30;

      expect(result).toEqual(expected);
    });
    it('2 - Should return the sum of the added numbers.', () => {
      const result = add(10, 0);
      const expected = 10;

      expect(result).toEqual(expected);
    });
    it('3 - Should return the sum of the added numbers.', () => {
      const result = add(18, 20.678);
      const expected = 38.678;

      expect(result).toEqual(expected);
    });
    it('4 - Should return the sum of the added numbers.', () => {
      const result = add(15.09, 20);
      const expected = 35.09;

      expect(result).toEqual(expected);
    });
    it('5 - Should return the sum of the added numbers.', () => {
      const result = add(-15.09, 0);
      const expected = -15.09;

      expect(result).toEqual(expected);
    });
    it('6 - Should return the sum of the added numbers.', () => {
      const result = add(0, -15.09);
      const expected = -15.09;

      expect(result).toEqual(expected);
    });
    it('7 - Should return the sum of the added numbers.', () => {
      const result = add(20.53, 0.873);
      const expected = 21.403;

      expect(result).toEqual(expected);
    });
    it('8 - Should return the sum of the added numbers.', () => {
      const result = add(0.0053, 0.000873);
      const expected = 0.006173;

      expect(result).toEqual(expected);
    });
    it('9 - Should return the sum of the added numbers.', () => {
      const result = add(-15.09, 20);
      const expected = 4.91;

      expect(result).toEqual(expected);
    });
    it('10 - Should return the sum of the added numbers.', () => {
      const result = add(15.09, -20);
      const expected = -4.91;

      expect(result).toEqual(expected);
    });

    it('11 - Should return the sum of the added numbers.', () => {
      const result = add(-15.09, -20);
      const expected = -35.09;

      expect(result).toEqual(expected);
    });

    it('12 - Should return the sum of the added numbers.', () => {
      const result = add(-20, -15.09);
      const expected = -35.09;

      expect(result).toEqual(expected);
    });
    it('13 - Should return the sum of the added numbers.', () => {
      const result = add(-0.0053, 0.000873);
      const expected = -0.004427;

      expect(result).toEqual(expected);
    });
    it('14 - Should return the sum of the added numbers.', () => {
      const result = add(0, 0.000873);
      const expected = 0.000873;

      expect(result).toEqual(expected);
    });
    it('15 - Should return the sum of the added numbers.', () => {
      const result = add(0, -0.000873);
      const expected = -0.000873;

      expect(result).toEqual(expected);
    });
    it('16 - Should return the sum of the added numbers.', () => {
      const result = add(-0.000873, 0);
      const expected = -0.000873;

      expect(result).toEqual(expected);
    });
  });

  describe('Subtraction function tests.', () => {
    it('1 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(10, 20);
      const expected = -10;

      expect(result).toEqual(expected);
    });
    it('2 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(20, 10);
      const expected = 10;

      expect(result).toEqual(expected);
    });
    it('3 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(20, 0);
      const expected = 20;

      expect(result).toEqual(expected);
    });
    it('4 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0, 20);
      const expected = -20;

      expect(result).toEqual(expected);
    });
    it('5 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0, -20);
      const expected = 20;

      expect(result).toEqual(expected);
    });
    it('6 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(20.53, 0.873);
      const expected = 19.657;

      expect(result).toEqual(expected);
    });
    it('7 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(20, 15.09);
      const expected = 4.91;

      expect(result).toEqual(expected);
    });
    it('8 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(18, 20.678);
      const expected = -2.678;

      expect(result).toEqual(expected);
    });
    it('9 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(15.09, 20);
      const expected = -4.91;

      expect(result).toEqual(expected);
    });

    it('10 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0.0053, 0.000873);
      const expected = 0.004427;

      expect(result).toEqual(expected);
    });

    it('11 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-15.09, 20);
      const expected = -35.09;

      expect(result).toEqual(expected);
    });
    it('12 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(15.09, -20);
      const expected = 35.09;

      expect(result).toEqual(expected);
    });
    it('13 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-55.09, -20.89);
      const expected = -34.2;

      expect(result).toEqual(expected);
    });
    it('14 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-20.89, -55.09);
      const expected = 34.2;

      expect(result).toEqual(expected);
    });
    it('15 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-0.0053, 0.000873);
      const expected = -0.006173;

      expect(result).toEqual(expected);
    });
    it('16 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-0.0053, -0.000873);
      const expected = -0.004427;

      expect(result).toEqual(expected);
    });

    it('17 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-0.000873, 0.0053);
      const expected = -0.006173;

      expect(result).toEqual(expected);
    });
    it('18 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-0.000873, -0.0053);
      const expected = 0.004427;

      expect(result).toEqual(expected);
    });
    it('19 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0, 0.0053);
      const expected = -0.0053;

      expect(result).toEqual(expected);
    });

    it('20 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0, -0.0053);
      const expected = 0.0053;

      expect(result).toEqual(expected);
    });

    it('21 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(0.0053, 0);
      const expected = 0.0053;

      expect(result).toEqual(expected);
    });

    it('22 - Should return the sum of the subtracted numbers.', () => {
      const result = subtract(-0.0053, 0);
      const expected = -0.0053;

      expect(result).toEqual(expected);
    });
  });

  describe('Multiplication function tests.', () => {
    it('1 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(20, 35);
      const expected = 700;

      expect(result).toEqual(expected);
    });
    it('2 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(20, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('3 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0, 35);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('4 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(20.53, 0.873);
      const expected = 17.92269;

      expect(result).toEqual(expected);
    });
    it('5 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(20.56733, 35);
      const expected = 719.85655;

      expect(result).toEqual(expected);
    });
    it('6 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(20.56733, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('7 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0, 20.56733);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('8 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0.0053, 0.000873);
      const expected = 0.0000046269;

      expect(result).toEqual(expected);
    });
    it('9 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0, 0.000873);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('10 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-20, -35);
      const expected = 700;

      expect(result).toEqual(expected);
    });
    it('11 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-20, 35);
      const expected = -700;

      expect(result).toEqual(expected);
    });
    it('12 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-20.99, -0.35);
      const expected = 7.3465;

      expect(result).toEqual(expected);
    });
    it('13 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-20.99, 0.35);
      const expected = -7.3465;

      expect(result).toEqual(expected);
    });
    it('14 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0.0053, -0.000873);
      const expected = -0.0000046269;

      expect(result).toEqual(expected);
    });
    it('15 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-0.0053, -0.000873);
      const expected = 0.0000046269;

      expect(result).toEqual(expected);
    });
    it('16 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(-0.0053, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('17 - Should return the sum of the multiplied numbers.', () => {
      const result = multiply(0, -0.0053);
      const expected = 0;

      expect(result).toEqual(expected);
    });
  });

  describe('Division function tests.', () => {
    it('1 - Should return the sum of the divided numbers.', () => {
      const result = divide(20, 5);
      const expected = 4;

      expect(result).toEqual(expected);
    });
    it('2 - Should return the sum of the divided numbers.', () => {
      const result = divide(20, 35);
      const expected = 0.5714285714285714;

      expect(result).toEqual(expected);
    });
    it('3 - Should return the sum of the divided numbers.', () => {
      const result = divide(20, 16);
      const expected = 1.25;

      expect(result).toEqual(expected);
    });
    it('4 - Should return the sum of the divided numbers.', () => {
      const result = divide(20, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('5 - Should return the sum of the divided numbers.', () => {
      const result = divide(0, 35);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('6 - Should return the sum of the divided numbers.', () => {
      const result = divide(20.5, 0.8);
      const expected = 25.625;

      expect(result).toEqual(expected);
    });
    it('7 - Should return the sum of the divided numbers.', () => {
      const result = divide(20.56733, 35);
      const expected = 0.587638;

      expect(result).toEqual(expected);
    });
    it('8 - Should return the sum of the divided numbers.', () => {
      const result = divide(20.56733, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('9 - Should return the sum of the divided numbers.', () => {
      const result = divide(0, 20.56733);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('10 - Should return the sum of the divided numbers.', () => {
      const result = divide(0.53, 0.002);
      const expected = 265;

      expect(result).toEqual(expected);
    });
    it('11 - Should return the sum of the divided numbers.', () => {
      const result = divide(0, 0.000873);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('12 - Should return the sum of the divided numbers.', () => {
      const result = divide(-20, -16);
      const expected = 1.25;

      expect(result).toEqual(expected);
    });
    it('13 - Should return the sum of the divided numbers.', () => {
      const result = divide(-20, 16);
      const expected = -1.25;

      expect(result).toEqual(expected);
    });
    it('14 - Should return the sum of the divided numbers.', () => {
      const result = divide(-20.99, -0.35);
      const expected = 59.97142857142857;

      expect(result).toEqual(expected);
    });
    it('15 - Should return the sum of the divided numbers.', () => {
      const result = divide(-20.99, 0.35);
      const expected = -59.97142857142857;

      expect(result).toEqual(expected);
    });
    it('16 - Should return the sum of the divided numbers.', () => {
      const result = divide(0.53, -0.002);
      const expected = -265;

      expect(result).toEqual(expected);
    });
    it('17 - Should return the sum of the divided numbers.', () => {
      const result = divide(0.52, 0.0022);
      const expected = 236.3636363636364;

      expect(result).toEqual(expected);
    });
    it('18 - Should return the sum of the divided numbers.', () => {
      const result = divide(-0.53, -0.002);
      const expected = 265;

      expect(result).toEqual(expected);
    });
    it('19 - Should return the sum of the divided numbers.', () => {
      const result = divide(-0.0053, 0);
      const expected = 0;

      expect(result).toEqual(expected);
    });
    it('20 - Should return the sum of the divided numbers.', () => {
      const result = divide(0.46, 2);
      const expected = 0.23;

      expect(result).toEqual(expected);
    });
  });
});
