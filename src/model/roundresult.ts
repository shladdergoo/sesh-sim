export class RoundResult {
  private readonly _newRound: boolean;
  private readonly _roundPurchaser: number;

  public get newRound(): boolean {
    return this._newRound;
  }

  public get roundPurchaser(): number {
    return this._roundPurchaser;
  }

  public constructor(newRound: boolean, roundPurchaser?: number) {
    this._newRound = newRound;
    this._roundPurchaser = roundPurchaser;
  }
}

export default RoundResult;
