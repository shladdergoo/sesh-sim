import Drinker from './drinker';

export class Drinkers {
  public lastArrival: number;
  public lastRound: number;

  public get members(): Drinker[] {
    return this.drinkers;
  }

  public get count(): number {
    return this.drinkers.length;
  }

  private readonly drinkers: Drinker[] = new Array<Drinker>();

  public add(drinker: Drinker): Drinkers {
    if (drinker === undefined) {
      throw new ReferenceError('drinker is undefined');
    }

    this.drinkers.push(drinker);

    return this;
  }

  public getById(id: number): Drinker {
    return this.drinkers.filter((d) => d.id === id)[0];
  }

  public toString(): string {
    let result: string = 'drinkers:\n';

    this.drinkers.forEach((d) => {
      result += d.toString();
      result += '\n';
    });

    return result;
  }
}

export default Drinkers;
