import IRoundTrigger from './interface/iroundtrigger';

import Drinker from './model/drinker';
import Drinkers from './model/drinkers';

export class NoDrinkRoundTrigger implements IRoundTrigger {
  private static getNextRoundDrinkerFromCandidates(
    drinkersWithNoDrink: Drinker[]
  ): number {
    return drinkersWithNoDrink.sort((a, b) => {
      return a.lastRoundIteration - b.lastRoundIteration;
    })[0].id;
  }

  public getPurchaser(drinkers: Drinkers): number {
    const pintLowThreshold: number = 1;

    const drinkersWithNoDrink: Drinker[] = drinkers.members.filter(
      (d) => d.currentPintPercent < pintLowThreshold
    );
    if (drinkersWithNoDrink.length === 0) {
      return 0;
    }

    if (drinkersWithNoDrink.length === 1) {
      return drinkersWithNoDrink[0].id;
    }

    return NoDrinkRoundTrigger.getNextRoundDrinkerFromCandidates(
      drinkersWithNoDrink
    );
  }
}

export default NoDrinkRoundTrigger;
