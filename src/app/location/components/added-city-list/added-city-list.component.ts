import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../location.service';
import { CityData } from '../../interfaces/location.interface';
import { IonicModule } from '@ionic/angular';
import { AddedCityComponent } from '../added-city/added-city.component';

@Component({
  selector: 'app-added-city-list',
  templateUrl: './added-city-list.component.html',
  styleUrls: ['./added-city-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AddedCityComponent],
})
export class AddedCityListComponent implements OnInit {
  @Input('addedCities') addedCities: CityData[] = [];

  // onRemovedCity(city: any) {
  //   console.log('city clicked > ', city);
  //   this.LocationService.onRemovedCity(city);
  // }

  constructor(private LocationService: LocationService) {}

  ngOnInit() {}
}
