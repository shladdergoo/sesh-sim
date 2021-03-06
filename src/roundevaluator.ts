import IRoundEvaluator from './interface/iroundevaluator';
import IRoundTrigger from './interface/iroundtrigger';

import Drinkers from './model/drinkers';
import RoundResult from './model/roundresult';

export class RoundEvaluator implements IRoundEvaluator {
  private static lowDrinkThreshold: number = 15;

  private static GetDrinksPurchased(drinkers: Drinkers): number {
    return drinkers.members.filter(
      (d) => d.currentDrinkLevel < RoundEvaluator.lowDrinkThreshold
    ).length;
  }

  private static UpdateReceivedDrinks(
    drinkers: Drinkers,
    roundPurchaser: number
  ): void {
    drinkers.members
      .filter((d) => d.currentDrinkLevel < RoundEvaluator.lowDrinkThreshold)
      .forEach((d) => {
        d.currentDrinkLevel = 100;
        if (roundPurchaser !== d.id) {
          d.drinksReceived++;
        }
      });
  }

  private static UpdateConsumedDrinks(drinkers: Drinkers): void {
    drinkers.members
      .filter((d) => d.currentDrinkLevel < RoundEvaluator.lowDrinkThreshold)
      .forEach((d) => {
        d.drinksConsumed++;
      });
  }

  private readonly roundTriggers: IRoundTrigger[];

  public constructor(roundTriggers: IRoundTrigger[]) {
    if (roundTriggers === undefined) {
      throw new ReferenceError('roundTrigger is undefined');
    }

    this.roundTriggers = roundTriggers;
  }

  public evaluate(drinkers: Drinkers, iteration: number): RoundResult {
    for (const roundTrigger of this.roundTriggers) {
      const roundPurchaser: number = roundTrigger.getPurchaser(drinkers);

      if (roundPurchaser > 0) {
        drinkers.getById(roundPurchaser).lastRoundIteration = iteration;
        const purchasedDrinks = RoundEvaluator.GetDrinksPurchased(drinkers);
        drinkers.getById(roundPurchaser).drinksBought += purchasedDrinks;
        RoundEvaluator.UpdateConsumedDrinks(drinkers);
        RoundEvaluator.UpdateReceivedDrinks(drinkers, roundPurchaser);

        return new RoundResult(
          true,
          roundPurchaser,
          purchasedDrinks,
          roundTrigger.type
        );
      }
    }

    return new RoundResult(false);
  }
}

export default RoundEvaluator;
