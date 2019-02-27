import IRateAdjuster from './interface/irateadjuster';

export class SlightlyRandomRateAdjuster implements IRateAdjuster {
  public getAdjustment(): number {
    let result: number = 0;

    while (result < 0.75) {
      result = Math.random();
    }

    return result;
  }
}

export default SlightlyRandomRateAdjuster;
