import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';
import * as sinon from 'sinon';

import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';
import IRateAdjuster from '../src/interface/irateadjuster';

import DecreasingConsumptionCalculator from '../src/decreasingconsumptioncalculator';
import { SIGINT } from 'constants';

const expect = chai.expect;

describe('DecreasingConsumptionCalculator', () => {
  describe('calculate', () => {
    const adjusterMock: IRateAdjuster = <IRateAdjuster>{};
    const sut: IConsumptionCalculator = new DecreasingConsumptionCalculator(
      adjusterMock
    );

    it('should decrease drink level correctly in first iteration', () => {
      adjusterMock.getAdjustment = sinon.stub().returns(1);

      const result: number = sut.calculate(100, 1);

      expect(result).to.equal(80);
    });

    it('should decrease drink level correctly in second iteration', () => {
      adjusterMock.getAdjustment = sinon.stub().returns(1);

      const result: number = sut.calculate(80, 2);

      expect(result).to.equal(60.2);
    });
  });
});
