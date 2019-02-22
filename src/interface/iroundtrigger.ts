import Drinkers from '../model/drinkers';

export interface IRoundTrigger {
  getPurchaser(drinkers: Drinkers): number;
}

export default IRoundTrigger;
