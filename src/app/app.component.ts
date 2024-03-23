import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { HeaderComponent } from './header/header.component';
import { AppService } from './shared/services/app.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoaderComponent,
    HeaderComponent,
    SearchBarComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    UiSwitchModule,
  ],
  providers: [AppService, LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
unitSystem!: string;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.unitSystem = this.appService.getUnitSystem();
  }

  changeUnit(unitSystem: string) {
    this.appService.updateUnitSystem(unitSystem);
  }
}
