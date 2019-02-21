import IConsumptionCalculator from './interface/iconsumptioncalculator';

import ConsumptionResult from './model/consumptionresult';
import Drinkers from './model/drinkers';

export class ConsumptionCalculator implements IConsumptionCalculator {
  public calculate(drinkers: Drinkers): ConsumptionResult {
    throw new Error('Method not implemented.');
  }
}

export default ConsumptionCalculator;
