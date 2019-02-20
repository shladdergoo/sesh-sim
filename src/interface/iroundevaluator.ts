import Drinkers from '../model/drinkers';
import RoundResult from '../model/roundresult';

export interface IRoundEvaluator {
  evaluate(drinkers: Drinkers): RoundResult;
}

export default IRoundEvaluator;
