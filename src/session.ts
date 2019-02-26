import * as events from 'events';

import IArrivalEvaluator from './interface/iarrivalevaluator';
import IConsumptionCalculator from './interface/iconsumptioncalculator';
import IRoundEvaluator from './interface/iroundevaluator';

import Drinker from './model/drinker';
import Drinkers from './model/drinkers';
import RoundResult from './model/roundresult';

export class Session extends events.EventEmitter {
  public readonly participants: number;
  private readonly length: number;
  private readonly pause: number;
  private readonly arrivalEvaluator: IArrivalEvaluator;
  private readonly roundEvaluator: IRoundEvaluator;
  private readonly consumptionCalculator: IConsumptionCalculator;
  private readonly drinkers: Drinkers;

  public constructor(
    participants: number,
    length: number,
    pause: number,
    arrivalEvaluator: IArrivalEvaluator,
    roundEvaluator: IRoundEvaluator,
    consumptionCalculator: IConsumptionCalculator
  ) {
    super();

    this.participants = participants;
    this.length = length;
    this.pause = pause;

    if (arrivalEvaluator === undefined) {
      throw new ReferenceError('arrivalEvaluator undefined');
    }
    this.arrivalEvaluator = arrivalEvaluator;

    if (roundEvaluator === undefined) {
      throw new ReferenceError('roundEvaluator undefined');
    }
    this.roundEvaluator = roundEvaluator;

    if (consumptionCalculator === undefined) {
      throw new ReferenceError('consumptionCalculator undefined');
    }
    this.consumptionCalculator = consumptionCalculator;

    this.drinkers = new Drinkers();

    events.EventEmitter.call(this);
  }

  public start(): void {
    for (let iteration = 1; iteration <= this.length; iteration++) {
      this.emit('iteration', iteration, this.drinkers);

      if (
        this.arrivalEvaluator.evaluate(
          this.drinkers,
          iteration,
          this.participants
        )
      ) {
        const drinker: Drinker = new Drinker(this.consumptionCalculator);
        drinker.id = this.drinkers.members.length + 1;
        drinker.arrivalIteration = iteration;
        this.drinkers.add(drinker);
        this.emit('arrival', drinker.id);
      }

      const roundResult: RoundResult = this.roundEvaluator.evaluate(
        this.drinkers,
        iteration
      );
      if (roundResult.newRound === true) {
        this.drinkers.getById(roundResult.roundPurchaser).newArrival = false;
        this.emit('round', roundResult);
      }

      this.drinkers.members.forEach((d) => {
        d.drink(iteration);
      });

      sleep(this.pause);
    }

    function sleep(pause: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, pause);
      });
    }
  }
}

export default Session;
