import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';

import Drinker from '../src/model/drinker';
import Drinkers from '../src/model/drinkers';

const expect = chai.expect;

describe('Drinkers', () => {
  describe('add', () => {
    it('should throw an exception if drinker is undefined', () => {
      expect(() => {
        let drinker: Drinker;

        const sut = new Drinkers();
        sut.add(drinker);
      }).to.throw(ReferenceError);
    });
  });
});
