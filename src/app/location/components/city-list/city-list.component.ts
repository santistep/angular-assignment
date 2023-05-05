import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { CityData, CityList } from '../../interfaces/location.interface';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../../location.service';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CityComponent],
})
export class CityListComponent {
  @Input('cityList') cityList: CityData[] = [];

  constructor(private LocationService: LocationService) {}
}
