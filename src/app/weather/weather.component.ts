import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';

import { AppService } from '../shared/services/app.service';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { CityCardComponent } from '../city-card/city-card.component';
import { apiConfig } from '../config';




@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CityCardComponent],
  templateUrl:'./weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weather!: Weather;
  measurementUnits: any;
  unitSystem: any;
  measureOfTemp: any;
  measureOfWindSpeed: any;
  measureOfPressure: any;

  constructor(
    private appService: AppService,
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private _weatherSubscription: Subscription
  ) {
    this.unitSystem = appService.getUnitSystem();
  }

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data['weather']))
      .subscribe((weather) => {
        this.weather = weather;

        const unitSystemString = String(this.unitSystem);
         this.measurementUnits = apiConfig.measurementUnits;

         this.measurementUnits[unitSystemString.toString()] = {
           temperature: this.measurementUnits.metric.temperature,
           windSpeed: this.measurementUnits.metric.windSpeed,
           pressure: this.measurementUnits.metric.pressure,
         };

         this.measureOfTemp = this.measurementUnits[unitSystemString].temperature;
         this.measureOfWindSpeed = this.measurementUnits[unitSystemString].windSpeed;
         this.measureOfPressure = this.measurementUnits[unitSystemString].pressure;
      });
  }

  ngOnDestroy() {
    this._weatherSubscription.unsubscribe();
  }
}
