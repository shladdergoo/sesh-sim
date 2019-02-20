import Drinker from './drinker';

export class Drinkers {
  public lastArrival: number;
  public lastRound: number;
  public get count(): number {
    return this.drinkers.length;
  }

  private readonly drinkers: Drinker[] = new Array<Drinker>();

  public add(): Drinkers {
    const drinker = new Drinker();
    drinker.id = this.drinkers.length + 1;

    this.drinkers.push(drinker);

    return this;
  }
}

export default Drinkers;
