import ConsumptionResult from '../model/consumptionresult';
import Drinkers from '../model/drinkers';

export interface IConsumptionCalculator {
  calculate(currentDrinkLevel: number, drinkerIteration: number): number;
}

export default IConsumptionCalculator;
