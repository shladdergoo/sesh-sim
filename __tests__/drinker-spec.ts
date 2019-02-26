import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';
import * as sinon from 'sinon';

import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';

import Drinker from '../src/model/drinker';

const expect = chai.expect;

describe('Drinker', () => {
  describe('ctor', () => {
    it('should throw an exception if consumptioncalculator is undefined', () => {
      expect(() => {
        let consumptionCalculator: IConsumptionCalculator;
        const sut = new Drinker(consumptionCalculator);
      }).to.throw(ReferenceError);
    });
  });

  describe('drink', () => {
    const calculatorMock: IConsumptionCalculator = <IConsumptionCalculator>{};

    it('should call consumption calculator if drink not empty', () => {
      calculatorMock.calculate = sinon.stub().returns(80);

      const sut = new Drinker(calculatorMock);
      sut.currentDrinkLevel = 100;
      sut.drink();

      expect((<sinon.SinonStub>calculatorMock.calculate).calledOnce).to.be.true;
    });

    it('should not call consumption calculator if drink is empty', () => {
      calculatorMock.calculate = sinon.stub().returns(80);

      const sut = new Drinker(calculatorMock);
      sut.drink();

      expect((<sinon.SinonStub>calculatorMock.calculate).called).to.be.false;
    });
  });
});
