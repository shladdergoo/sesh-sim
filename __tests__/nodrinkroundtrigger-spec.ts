import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';

import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';
import IRoundTrigger from '../src/interface/iroundtrigger';

import Drinker from '../src/model/drinker';
import Drinkers from '../src/model/drinkers';
import NoDrinkRoundTrigger from '../src/nodrinkroundtrigger';

const expect = chai.expect;

describe('NoDrinkRoundTrigger', () => {
  describe('getPurchaser', () => {
    const sut: IRoundTrigger = new NoDrinkRoundTrigger();
    const consumptionCalculator: IConsumptionCalculator = <
      IConsumptionCalculator
    >{};

    it('should return 0 if everyone has a drink', () => {
      let drinker: Drinker = new Drinker(consumptionCalculator);
      drinker.id = 1;
      drinker.currentDrinkLevel = 80;
      const drinkers: Drinkers = new Drinkers().add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 2;
      drinker.currentDrinkLevel = 90;
      drinkers.add(drinker);

      const result = sut.getPurchaser(drinkers);

      expect(result).to.equal(0);
    });

    it('should return the drinker id if a drinker does not have a drink', () => {
      let drinker: Drinker = new Drinker(consumptionCalculator);
      drinker.id = 1;
      drinker.currentDrinkLevel = 80;
      const drinkers: Drinkers = new Drinkers().add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 2;
      drinkers.add(drinker);

      const result = sut.getPurchaser(drinkers);

      expect(result).to.equal(2);
    });

    it('should return the id of the drinker who bought a round earliest if more than one drinker does not have a drink', () => {
      let drinker: Drinker = new Drinker(consumptionCalculator);
      drinker.id = 1;
      drinker.lastRoundIteration = 1;
      drinker.currentDrinkLevel = 80;
      const drinkers: Drinkers = new Drinkers().add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 2;
      drinkers.add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 3;
      drinker.lastRoundIteration = 10;
      drinkers.add(drinker);

      const result = sut.getPurchaser(drinkers);

      expect(result).to.equal(2);
    });
  });
});
