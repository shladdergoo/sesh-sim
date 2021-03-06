import IConsumptionCalculator from './interface/iconsumptioncalculator';
import IRateAdjuster from './interface/irateadjuster';

export class DecreasingConsumptionCalculator implements IConsumptionCalculator {
  private readonly rateAdjuster: IRateAdjuster;

  public constructor(rateAdjuster: IRateAdjuster) {
    if (rateAdjuster === undefined) {
      throw new ReferenceError('rateAdjuster is undefined');
    }

    this.rateAdjuster = rateAdjuster;
  }

  public calculate(
    currentDrinkLevel: number,
    drinkerIteration: number
  ): number {
    const consumptionRate: number = 20 * this.rateAdjuster.getAdjustment();
    let consumptionModifier: number = (drinkerIteration - 1) * 0.2;

    if (consumptionModifier >= consumptionRate) {
      consumptionModifier = consumptionRate - 1;
    }

    currentDrinkLevel =
      currentDrinkLevel - consumptionRate + consumptionModifier;

    if (currentDrinkLevel < 0) {
      currentDrinkLevel = 0;
    }

    return currentDrinkLevel;
  }
}

export default DecreasingConsumptionCalculator;
