import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

//import { WeatherService } from '../../weather/weather.service';

@Injectable()
export class ResolveLocationService implements Resolve<any> {
  constructor(
    //private weatherService: WeatherService,
    private router: Router
  ) { }resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    throw new Error('Method not implemented.');
  }
;

  // resolve(): Observable<any> { // TODO: I think, It shouldn't be so
  //   this.weatherService.getWeatherByСurrentLocation()
  //     .then((city) => {
  //       this.router.navigate([`/${city}`]);
  //     })
  //     .catch(error => console.error(error));

  //   return Observable.empty();
  // }
}
