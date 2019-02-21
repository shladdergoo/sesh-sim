import IRoundEvaluator from './interface/iroundevaluator';

import Drinkers from './model/drinkers';
import RoundResult from './model/roundresult';

export class RoundEvaluator implements IRoundEvaluator {
  public evaluate(drinkers: Drinkers): RoundResult {
    throw new Error('Method not implemented.');
  }
}

export default RoundEvaluator;
