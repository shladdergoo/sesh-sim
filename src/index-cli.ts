import IArrivalEvaluator from './interface/iarrivalevaluator';
import IConsumptionCalculator from './interface/iconsumptioncalculator';
import IRoundEvaluator from './interface/iroundevaluator';
import IRoundTrigger from './interface/iroundtrigger';

import ConsumptionCalculator from './decreasingconsumptioncalculator';
import NewArrivalRoundTrigger from './newarrivalroundtrigger';
import NoDrinkRoundTrigger from './nodrinkroundtrigger';
import RegularArrivalEvaluator from './regulararrivalevaluator';
import RoundEvaluator from './roundevaluator';
import Session from './session';

const arrivalEvaluator: IArrivalEvaluator = new RegularArrivalEvaluator();
const roundTriggers: IRoundTrigger[] = new Array<IRoundTrigger>();
roundTriggers.push(new NewArrivalRoundTrigger());
roundTriggers.push(new NoDrinkRoundTrigger());
const roundEvaluator: IRoundEvaluator = new RoundEvaluator(roundTriggers);
const consumptionCalculator: IConsumptionCalculator = new ConsumptionCalculator();

const session: Session = new Session(
  12,
  200,
  1000,
  arrivalEvaluator,
  roundEvaluator,
  consumptionCalculator
);

session.on('iteration', (iteration, drinkers) => {
  console.log(`iteration: ${iteration}\n${drinkers.toString()}`);
});

session.on('arrival', (id) => {
  console.log(`arrival: id: ${id}`);
});

session.on('round', (roundResult) => {
  console.log(`round: ${roundResult.toString()}`);
});

session.start();
