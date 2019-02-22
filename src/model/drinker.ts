export class Drinker {
  private static readonly drinksPerPint: number = 10;

  public id: number;
  public newArrival: boolean = true;
  public pintsConsumed: number;
  public pintsBought: number;
  public currentPintPercent: number = 100;
  public arrivalTime: Date = new Date();

  public drink(): void {
    if (this.currentPintPercent === 0) {
      return;
    }

    this.currentPintPercent =
      this.currentPintPercent - 100 / Drinker.drinksPerPint;
  }
}

export default Drinker;
