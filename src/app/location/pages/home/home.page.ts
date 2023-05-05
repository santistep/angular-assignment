import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { LocationPage } from '../location/location.page';
import { WeatherPage } from '../weather/weather.page';
import { NavBarComponent } from '../../components/assets/nav-bar/nav-bar.component';
import { AddedCityListComponent } from '../../components/added-city-list/added-city-list.component';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LocationPage,
    WeatherPage,
    NavBarComponent,
    AddedCityListComponent,
  ],
})
export class HomePage implements OnInit {
  get addedCities() {
    return this.LocationService.checkedCities;
  }

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private LocationService: LocationService
  ) {}

  ngOnInit() {}
}
