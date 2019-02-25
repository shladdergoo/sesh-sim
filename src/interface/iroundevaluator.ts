import Drinkers from '../model/drinkers';
import RoundResult from '../model/roundresult';

export interface IRoundEvaluator {
  evaluate(drinkers: Drinkers, iteration: number): RoundResult;
}

export default IRoundEvaluator;
