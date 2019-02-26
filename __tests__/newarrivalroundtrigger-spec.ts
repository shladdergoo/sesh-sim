import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';
import * as sinon from 'sinon';

import IRoundTrigger from '../src/interface/iroundtrigger';

import Drinker from '../src/model/drinker';
import Drinkers from '../src/model/drinkers';
import NewArrivalRoundTrigger from '../src/newarrivalroundtrigger';
import IConsumptionCalculator from '../src/interface/iconsumptioncalculator';

const expect = chai.expect;

describe('NewArrivalRoundTrigger', () => {
  describe('getPurchaser', () => {
    const sut: IRoundTrigger = new NewArrivalRoundTrigger();
    const consumptionCalculator: IConsumptionCalculator = <
      IConsumptionCalculator
    >{};

    it('should return 0 when no new arrivals', () => {
      const drinker: Drinker = new Drinker(consumptionCalculator);
      drinker.id = 1;
      drinker.newArrival = false;
      const drinkers: Drinkers = new Drinkers().add(drinker);

      const result: number = sut.getPurchaser(drinkers);

      expect(result).to.equal(0);
    });

    it('should return drinker id when new arrival found', () => {
      const drinkers: Drinkers = new Drinkers().add();

      const result: number = sut.getPurchaser(drinkers);

      expect(result).to.equal(1);
    });

    it('should return id of latest drinker to arrive when more than 1 new arrival', () => {
      let drinker: Drinker = new Drinker(consumptionCalculator);
      drinker.id = 3;
      drinker.newArrival = true;
      drinker.arrivalIteration = 15;
      const drinkers: Drinkers = new Drinkers().add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 2;
      drinker.newArrival = true;
      drinker.arrivalIteration = 16;
      drinkers.add(drinker);

      drinker = new Drinker(consumptionCalculator);
      drinker.id = 1;
      drinker.newArrival = true;
      drinker.arrivalIteration = 14;
      drinkers.add(drinker);

      const result: number = sut.getPurchaser(drinkers);

      expect(result).to.equal(2);
    });
  });
});
