export class RoundResult {
  private readonly _newRound: boolean;
  private readonly _roundPurchaser: number;
  private readonly _purchasedDrinks: number;

  public get newRound(): boolean {
    return this._newRound;
  }

  public get roundPurchaser(): number {
    return this._roundPurchaser;
  }

  public get purchasedDrinks(): number {
    return this._purchasedDrinks;
  }

  public constructor(
    newRound: boolean,
    roundPurchaser?: number,
    purchasedDrinks?: number
  ) {
    this._newRound = newRound;
    this._roundPurchaser = roundPurchaser;
    this._purchasedDrinks = purchasedDrinks;
  }
}

export default RoundResult;
