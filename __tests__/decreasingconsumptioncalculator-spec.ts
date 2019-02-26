import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';

import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';

import DecreasingConsumptionCalculator from '../src/decreasingconsumptioncalculator';

const expect = chai.expect;

describe('DecreasingConsumptionCalculator', () => {
  describe('calculate', () => {
    const sut: IConsumptionCalculator = new DecreasingConsumptionCalculator();

    it('should decrease drink level correctly in first iteration', () => {
      const result: number = sut.calculate(100, 1);

      expect(result).to.equal(80);
    });

    it('should decrease drink level correctly in second iteration', () => {
      const result: number = sut.calculate(80, 2);

      expect(result).to.equal(61);
    });
  });
});
