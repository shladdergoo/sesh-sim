import IConsumptionCalculator from './interface/iconsumptioncalculator';

import ConsumptionResult from './model/consumptionresult';
import Drinkers from './model/drinkers';

export class DecreasingConsumptionCalculator implements IConsumptionCalculator {
  public calculate(
    currentDrinkLevel: number,
    drinkerIteration: number
  ): number {
    const consumptionRate: number = 20;
    let consumptionModifier: number = (drinkerIteration - 1);

    if(consumptionModifier >= consumptionRate) {
      consumptionModifier = consumptionRate - 1;
    }

    currentDrinkLevel =
      currentDrinkLevel -
      consumptionRate +
      consumptionModifier;

    if (currentDrinkLevel < 0) {
      currentDrinkLevel = 0;
    }

    return currentDrinkLevel;
  }
}

export default DecreasingConsumptionCalculator;
