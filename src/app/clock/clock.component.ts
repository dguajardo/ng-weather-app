import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from './clock.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, OnDestroy {

  time!: Date;

  constructor(private clockService: ClockService,
  private _clockSubscription: Subscription) { }

  ngOnInit(): void {
    this._clockSubscription = this.clockService
      .getClock()
      .subscribe((time: Date) => (this.time = time));
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}
