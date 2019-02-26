export class Drinker {
  private static readonly drinksPerPint: number = 10;

  public id: number;
  public newArrival: boolean = true;
  public drinksReceived: number = 0;
  public drinksBought: number = 0;
  public currentDrinkLevel: number = 0;
  public arrivalTime: Date = new Date();
  public lastRoundIteration: number = 0;

  public drink(): void {
    if (this.currentDrinkLevel === 0) {
      return;
    }

    this.currentDrinkLevel =
      this.currentDrinkLevel - 100 / Drinker.drinksPerPint;
  }
}

export default Drinker;
