import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../../location.service';
import { NavBarComponent } from '../../components/assets/nav-bar/nav-bar.component';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavBarComponent,
    WeatherCardComponent,
  ],
})
export class WeatherPage implements OnInit {
  get checkedCities() {
    return this.LocationService.checkedCities;
  }

  constructor(private LocationService: LocationService) {}

  ngOnInit() {}
}
