import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Weather } from '../weather/weather';
import { apiConfig } from '../config';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { DateComponent } from '../date/date.component';
import { ClockComponent } from '../clock/clock.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [DatePipe, LowerCasePipe, DateComponent, ClockComponent, WeatherComponent],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
  @Input() unitSystem!: string;
  @Input() weather!: Weather;

  measureOfTemp!: string;
  measureOfWindSpeed!: string;
  measureOfPressure!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data['weather']))
      .subscribe((weather) => {
        this.weather = weather;

        const measurementUnits =
          apiConfig.measurementUnits[
            this.unitSystem as keyof typeof apiConfig.measurementUnits
          ];

        this.measureOfTemp = measurementUnits.temperature;
        this.measureOfWindSpeed = measurementUnits.windSpeed;
        this.measureOfPressure = measurementUnits.pressure;
      });
  }
}
