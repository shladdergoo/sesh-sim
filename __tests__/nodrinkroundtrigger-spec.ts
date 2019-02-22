import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';

import IRoundTrigger from '../src/interface/iroundtrigger';

import Drinker from '../src/model/drinker';
import Drinkers from '../src/model/drinkers';
import TurnRoundTrigger from '../src/nodrinkroundtrigger';

const expect = chai.expect;

describe('NoDrinkRoundTrigger', () => {
  describe('getPurchaser', () => {
    const sut: IRoundTrigger = new TurnRoundTrigger();

    it('should return 0 if everyone has a drink', () => {
      expect(false).to.equal(true);
    });

    it('should return the drinker id if the drinker does not have a drink', () => {
      expect(false).to.equal(true);
    });

    it('should return the id of the drinker who bought a round earliest if more than one drinker does not have a drink', () => {
      expect(false).to.equal(true);
    });
  });
});
