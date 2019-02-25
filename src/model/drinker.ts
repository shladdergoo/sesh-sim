export class Drinker {
  private static readonly drinksPerPint: number = 10;

  public id: number;
  public newArrival: boolean = true;
  public drinksConsumed: number = 0;
  public drinksBought: number = 0;
  public currentPintPercent: number = 0;
  public arrivalTime: Date = new Date();
  public lastRoundIteration: number = 0;

  public drink(): void {
    if (this.currentPintPercent === 0) {
      return;
    }

    this.currentPintPercent =
      this.currentPintPercent - 100 / Drinker.drinksPerPint;
  }
}

export default Drinker;
