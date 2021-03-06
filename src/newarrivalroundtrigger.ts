import IRoundTrigger from './interface/iroundtrigger';

import Drinker from './model/drinker';
import Drinkers from './model/drinkers';

export class NewArrivalRoundTrigger implements IRoundTrigger {
  public get type(): string {
    return 'new arrival';
  }

  public getPurchaser(drinkers: Drinkers): number {
    const newArriver: Drinker = drinkers.members
      .filter((d) => d.newArrival === true)
      .sort((a, b) => {
        return b.arrivalIteration - a.arrivalIteration;
      })[0];

    if (newArriver === undefined) {
      return 0;
    }

    return newArriver.id;
  }
}

export default NewArrivalRoundTrigger;
