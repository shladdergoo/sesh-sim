import IRoundEvaluator from './interface/iroundevaluator';
import IRoundTrigger from './interface/iroundtrigger';

import Drinkers from './model/drinkers';
import RoundResult from './model/roundresult';

export class RoundEvaluator implements IRoundEvaluator {
  private readonly roundTriggers: IRoundTrigger[];

  public constructor(roundTriggers: IRoundTrigger[]) {
    if (roundTriggers === undefined) {
      throw new ReferenceError('roundTrigger is undefined');
    }

    this.roundTriggers = roundTriggers;
  }

  public evaluate(drinkers: Drinkers): RoundResult {
    this.roundTriggers.forEach((roundTrigger) => {
      const roundPurchaser: number = roundTrigger.getPurchaser(drinkers);

      if (roundPurchaser > 0) {
        return new RoundResult(true, roundPurchaser);
      }
    });

    return new RoundResult(false);
  }
}

export default RoundEvaluator;
