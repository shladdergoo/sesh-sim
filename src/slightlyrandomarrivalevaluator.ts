import IArrivalEvaluator from './interface/iarrivalevaluator';

import Drinkers from './model/drinkers';

export class SlightlyRandomArrivalEvaluator implements IArrivalEvaluator {
  public evaluate(
    drinkers: Drinkers,
    iteration: number,
    maxDrinkers: number
  ): boolean {
    if (drinkers === undefined) {
      throw new ReferenceError('drinkers undefined');
    }

    if (iteration <= 0) {
      throw new RangeError('iteration must be greater than 0');
    }

    if (drinkers.count >= maxDrinkers) {
      return false;
    }

    return Math.random() * 10 >= 7;
  }
}

export default SlightlyRandomArrivalEvaluator;
