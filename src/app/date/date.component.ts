import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateService } from './date.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date',
  standalone: true,
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit, OnDestroy {
  date!: string;

  constructor(
    private dateService: DateService,
    private _clockSubscription: Subscription
  ) {}

  ngOnInit(): void {
    this._clockSubscription = this.dateService
      .getDate()
      .subscribe(
        (date: Date) => (this.date = this.dateService.formatDate(date))
      );
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}
