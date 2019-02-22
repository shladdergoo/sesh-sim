import IRoundTrigger from './interface/iroundtrigger';

import Drinkers from './model/drinkers';

export class TurnRoundTrigger implements IRoundTrigger {
  public getPurchaser(drinkers: Drinkers): number {
    throw new Error('Method not implemented.');
  }
}

export default TurnRoundTrigger;
