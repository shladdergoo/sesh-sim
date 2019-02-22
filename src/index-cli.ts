import IArrivalEvaluator from './interface/iarrivalevaluator';
import IConsumptionCalculator from './interface/iconsumptioncalculator';
import IRoundEvaluator from './interface/iroundevaluator';
import IRoundTrigger from './interface/iroundtrigger';

import ConsumptionCalculator from './consumptioncalculator';
import RegularArrivalEvaluator from './regulararrivalevaluator';
import RoundEvaluator from './roundevaluator';
import Session from './session';

const arrivalEvaluator: IArrivalEvaluator = new RegularArrivalEvaluator();
const roundTriggers: IRoundTrigger[] = new Array<IRoundTrigger>();
const roundEvaluator: IRoundEvaluator = new RoundEvaluator(roundTriggers);
const consumptionCalculator: IConsumptionCalculator = new ConsumptionCalculator();

const session: Session = new Session(
  12,
  200,
  10,
  arrivalEvaluator,
  roundEvaluator,
  consumptionCalculator
);

session.on('iteration', (iteration) => {
  console.log(`iteration: ${iteration}`);
});

session.start();

console.log('hello world');
