import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { appConfig } from '../../config';

@Injectable()
export class AppService {
  private unitSystem: string;


  constructor(
    private localStorage: LocalStorageService
  ) {

     if (typeof localStorage !== 'undefined') {
       this.unitSystem = this.localStorage.get('unit') || appConfig.defaultUnit;
     } else {
       this.unitSystem = appConfig.defaultUnit;
     }
  }

  getUnitSystem(): string {
    return this.unitSystem;
  }

  updateUnitSystem(unitSystem: string): void {
     if (typeof localStorage !== 'undefined') {
       this.localStorage.set('unit', unitSystem);
       setTimeout(() => window.location.reload(), 300);
     }
  }
}
