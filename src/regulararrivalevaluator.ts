import Drinkers from './model/drinkers';

import IArrivalEvaluator from './interface/iArrivalEvaluator';

export class RegularArrivalEvaluator implements IArrivalEvaluator {
  public evaluate(
    drinkers: Drinkers,
    iteration: number,
    maxDrinkers: number
  ): boolean {
    const iterationsPerArrival: number = 10;

    if (drinkers === undefined) {
      throw new ReferenceError('drinkers undefined');
    }

    if (iteration <= 0) {
      throw new RangeError('iteration must be greater than 0');
    }

    if (drinkers.count >= maxDrinkers) {
      return false;
    }

    return iteration % iterationsPerArrival === 0;
  }
}

export default RegularArrivalEvaluator;
