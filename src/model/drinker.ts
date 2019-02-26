import IConsumptionCalculator from '../interface/iconsumptioncalculator';

export class Drinker {
  private static readonly drinksPerPint: number = 10;

  public id: number;
  public newArrival: boolean = true;
  public drinksReceived: number = 0;
  public drinksBought: number = 0;
  public currentDrinkLevel: number = 0;
  public arrivalIteration: number = 0;
  public lastRoundIteration: number = 0;

  private readonly consumptionCalculator: IConsumptionCalculator;

  public constructor(consumptionCalculator: IConsumptionCalculator) {
    if (consumptionCalculator === undefined) {
      throw new ReferenceError('consumptionCalculator is undefined');
    }

    this.consumptionCalculator = consumptionCalculator;
  }

  public drink(): void {
    if (this.currentDrinkLevel === 0) {
      return;
    }

    this.currentDrinkLevel = this.consumptionCalculator.calculate(
      this.currentDrinkLevel,
      this.arrivalIteration
    );
  }
}

export default Drinker;
