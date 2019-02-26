import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';
import * as sinon from 'sinon';

import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';
import IRoundEvaluator from '../src/interface/iroundevaluator';
import IRoundTrigger from '../src/interface/iroundtrigger';

import Drinker from '../src/model/drinker';
import Drinkers from '../src/model/drinkers';
import RoundEvaluator from '../src/roundevaluator';
import RoundResult from '../src/model/roundresult';

const expect = chai.expect;

describe('RoundEvaluator', () => {
  describe('evaluate', () => {
    let triggerMock: IRoundTrigger = <IRoundTrigger>{};

    it('should return false when no round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(0);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = new Drinkers();

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(result.newRound).to.equal(false);
    });

    it('should return true when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(1);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(1);

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(result.newRound).to.equal(true);
    });

    it('should return purchaser when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(3);

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(result.roundPurchaser).to.equal(2);
    });

    it('should return correct number of purchases when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(5);
      drinkers.members[0].currentDrinkLevel = 10;
      drinkers.members[1].currentDrinkLevel = 0;
      drinkers.members[2].currentDrinkLevel = 95;
      drinkers.members[3].currentDrinkLevel = 9;
      drinkers.members[4].currentDrinkLevel = 5;

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(result.purchasedDrinks).to.equal(4);
    });

    it('should update drinkers drinks correctly when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(5);
      drinkers.members[0].currentDrinkLevel = 10;
      drinkers.members[1].currentDrinkLevel = 0;
      drinkers.members[2].currentDrinkLevel = 95;
      drinkers.members[3].currentDrinkLevel = 9;
      drinkers.members[4].currentDrinkLevel = 5;

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(drinkers.members[0].currentDrinkLevel).to.equal(100);
      expect(drinkers.members[1].currentDrinkLevel).to.equal(100);
      expect(drinkers.members[2].currentDrinkLevel).to.equal(95);
      expect(drinkers.members[3].currentDrinkLevel).to.equal(100);
      expect(drinkers.members[4].currentDrinkLevel).to.equal(100);
    });

    it('should update lastRoundIteration for purchaser when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(3);

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(drinkers.members[1].lastRoundIteration).to.equal(99);
    });

    it('should update drinksPurchased for purchaser when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(5);
      drinkers.members[0].currentDrinkLevel = 10;
      drinkers.members[1].currentDrinkLevel = 0;
      drinkers.members[2].currentDrinkLevel = 95;
      drinkers.members[3].currentDrinkLevel = 9;
      drinkers.members[4].currentDrinkLevel = 5;

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(drinkers.members[1].drinksBought).to.equal(4);
    });

    it('should update drinksReceived for the recipients when round triggered', () => {
      triggerMock.getPurchaser = sinon.stub().returns(2);
      const triggers: IRoundTrigger[] = new Array<IRoundTrigger>();
      triggers.push(triggerMock);

      const drinkers: Drinkers = getTestDrinkers(5);
      drinkers.members[0].currentDrinkLevel = 10;
      drinkers.members[1].currentDrinkLevel = 0;
      drinkers.members[2].currentDrinkLevel = 95;
      drinkers.members[3].currentDrinkLevel = 9;
      drinkers.members[4].currentDrinkLevel = 5;

      const sut: IRoundEvaluator = new RoundEvaluator(triggers);

      const result: RoundResult = sut.evaluate(drinkers, 99);

      expect(drinkers.members[0].drinksReceived).to.equal(1);
      expect(drinkers.members[1].drinksReceived).to.equal(0);
      expect(drinkers.members[2].drinksReceived).to.equal(0);
      expect(drinkers.members[3].drinksReceived).to.equal(1);
      expect(drinkers.members[4].drinksReceived).to.equal(1);
    });
  });
});

function getTestDrinkers(numOfDrinkers: number): Drinkers {
  const drinkers: Drinkers = new Drinkers();

  for (let i = 0; i < numOfDrinkers; i++) {
    const drinker = new Drinker(<IConsumptionCalculator>{});
    drinker.id = i + 1;
    drinkers.members.push(drinker);
  }

  return drinkers;
}
