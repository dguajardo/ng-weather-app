import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  set(key: string, value: any): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get(key: string): any {
    if (typeof localStorage !== 'undefined') {
      let value = localStorage.getItem(key);
      if (value) {
        value = JSON.parse(value);
      }
      return value;
    }
    return null;
  }
}
