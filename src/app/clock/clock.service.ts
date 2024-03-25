import { Injectable } from '@angular/core';
import { Observable, map, interval } from 'rxjs';
import { share, startWith } from 'rxjs/operators';

@Injectable()
export class ClockService {
  private clock: Observable<Date>;

  constructor() {
   this.clock = interval(10000).pipe(
     startWith(0),
     map(() => new Date()),
     share()
   );
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
