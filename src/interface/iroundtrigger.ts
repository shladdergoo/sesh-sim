import Drinkers from '../model/drinkers';

export interface IRoundTrigger {
  type: string;

  getPurchaser(drinkers: Drinkers): number;
}

export default IRoundTrigger;
