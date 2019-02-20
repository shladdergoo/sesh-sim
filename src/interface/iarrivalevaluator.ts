import Drinkers from '../model/drinkers';

export interface IArrivalEvaluator {
  evaluate(drinkers: Drinkers, iteration: number, maxDrinkers: number): boolean;
}

export default IArrivalEvaluator;
