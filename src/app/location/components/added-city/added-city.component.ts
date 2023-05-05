import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../location.service';
import { CityData, CityList } from '../../interfaces/location.interface';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-added-city',
  templateUrl: './added-city.component.html',
  styleUrls: ['./added-city.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AddedCityComponent implements OnInit {
  @Input('addedCity') addedCity?: CityData;

  onRemovedCity(city: any) {
    // console.log('city clicked > ', city);
    this.LocationService.onRemovedCity(city);
  }

  constructor(private LocationService: LocationService) {}

  ngOnInit() {}
}
