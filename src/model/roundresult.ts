export class RoundResult {
  private readonly _newRound: boolean;
  private readonly _roundPurchaser: number;
  private readonly _purchasedDrinks: number;
  private readonly _roundType: string;

  public get newRound(): boolean {
    return this._newRound;
  }

  public get roundPurchaser(): number {
    return this._roundPurchaser;
  }

  public get purchasedDrinks(): number {
    return this._purchasedDrinks;
  }

  public get roundType(): string {
    return this._roundType;
  }

  public constructor(
    newRound: boolean,
    roundPurchaser?: number,
    purchasedDrinks?: number,
    roundType?: string
  ) {
    this._newRound = newRound;
    this._roundPurchaser = roundPurchaser;
    this._purchasedDrinks = purchasedDrinks;
    this._roundType = roundType;
  }

  public toString(): string {
    return `type: ${this.roundType}, boughtBy: ${
      this.roundPurchaser
    }, purchasedDrinks: ${this.purchasedDrinks}`;
  }
}

export default RoundResult;
