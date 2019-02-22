import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';

import IArrivalEvaluator from '../src/interface/iarrivalevaluator';
import RegularArrivalEvaluator from '../src/regulararrivalevaluator';
import Drinkers from '../src/model/drinkers';

const expect = chai.expect;

describe('RegularArrivalEvaluator', () => {
  describe('evaluate', () => {
    const sut: IArrivalEvaluator = new RegularArrivalEvaluator();

    it('should throw an exception when drinkers in undefined', () => {
      expect(() => {
        let drinkers: Drinkers;
        sut.evaluate(drinkers, 0, 1);
      }).to.throw(ReferenceError);
    });

    it('should throw an exception when iteration less that 1', () => {
      expect(() => {
        sut.evaluate(new Drinkers(), 0, 1);
      }).to.throw(RangeError);
    });

    it('should return false when max drinkers already reached', () => {
      const result: boolean = sut.evaluate(new Drinkers().add(), 1, 1);

      expect(result).to.be.false;
    });

    it('should return false when not correct iteration', () => {
      const result: boolean = sut.evaluate(new Drinkers(), 1, 99);

      expect(result).to.be.false;
    });

    it('should return true when correct iteration (10)', () => {
      const result: boolean = sut.evaluate(new Drinkers(), 10, 99);

      expect(result).to.be.true;
    });

    it('should return true when correct iteration (20)', () => {
      const result: boolean = sut.evaluate(new Drinkers(), 20, 99);

      expect(result).to.be.true;
    });
  });
});
