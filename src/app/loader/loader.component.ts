import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  providers:[LoaderService],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})


export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription = new Subscription;
  constructor(
    private loaderService: LoaderService,
  ) {

     }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
        this.show = state.show;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
