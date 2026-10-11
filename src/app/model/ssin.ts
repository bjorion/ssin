import {SsinType} from './ssinType';

export class Ssin implements SsinType {

  readonly inputYear: number;
  readonly inputMonth: number;
  readonly inputDay: number;
  readonly increment: number;
  readonly checkSum: number;

  readonly exactYear: number;
  readonly exactMonth: number;
  readonly exactDay: number;

  constructor(ssinAsStr: string) {

    this.inputYear = 0;
    this.inputMonth = 0;
    this.inputDay = 0;
    this.increment = 0;
    this.checkSum = 0;
    this.exactYear = 0;
    this.exactMonth = 0;
    this.exactDay = 0;
  }

}
