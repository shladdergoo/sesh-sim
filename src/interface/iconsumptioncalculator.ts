import ConsumptionResult from '../model/consumptionresult';
import Drinkers from '../model/drinkers';

export interface IConsumptionCalculator {
  calculate(drinkers: Drinkers): ConsumptionResult;
}

export default IConsumptionCalculator;
