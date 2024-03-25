import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { HeaderComponent } from './header/header.component';
import { AppService } from './shared/services/app.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CityCardComponent } from './city-card/city-card.component';
import { appRouting } from './app.routes';
import { ResolveLocationService } from './shared/services/resolve-location.service';
import { CityCardResolver } from './city-card/city-card-resolver.service';
import { WeatherService } from './weather/weather.service';
import { LoaderService } from './loader/loader.service';
import { HelperService } from './shared/services/helper.service';
import { WeatherIconsService } from './shared/weather-icons/weather-icons.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoaderComponent,
    HeaderComponent,
    SearchBarComponent,
    CityCardComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    UiSwitchModule,
  ],
  providers: [
    AppService,
    LocalStorageService,
    ResolveLocationService,
    CityCardResolver,
    WeatherService,
    LoaderService,
    HelperService,
    WeatherIconsService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  unitSystem!: string;

  constructor(
    private appService: AppService,
    private resolveLocationService: ResolveLocationService
  ) {}

  ngOnInit() {
    this.unitSystem = this.appService.getUnitSystem();
    this.resolveLocationService;
  }

  changeUnit(unitSystem: string) {
    this.appService.updateUnitSystem(unitSystem);
  }
}
