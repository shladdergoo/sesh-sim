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

  public drink(iteration: number): void {
    if (this.currentDrinkLevel === 0) {
      return;
    }

    this.currentDrinkLevel = this.consumptionCalculator.calculate(
      this.currentDrinkLevel,
      iteration - this.arrivalIteration + 1
    );
  }

  public toString(): string {
    let result: string = `id: ${this.id}, drinksBought: ${
      this.drinksBought
    }, drinksReceived: ${this.drinksReceived}, currentDrinkLevel: ${
      this.currentDrinkLevel
    }`;

    return result;
  }
}

export default Drinker;
