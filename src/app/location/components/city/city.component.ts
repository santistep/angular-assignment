import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../../location.service';
import { CityData } from '../../interfaces/location.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CityComponent {
  @Input('city') city: CityData = {
    id: 0,
    name: 'city name',
    lat: 0,
    lon: 0,
    country: 'country',
    state: 'state',
  };
  @Input('index') index: number = 0;

  buttonLabel: string = '+';

  addCity(city: CityData) {
    this.LocationService.onCityAdedd(city);
  }

  isChecked(id: any, i: any): void {
    // console.log('i ->', i);
    if (this.LocationService.checkedCities.some((elem) => elem.id === id)) {
      this.buttonLabel = '-';
    } else {
      this.buttonLabel = '+';
    }
  }

  constructor(private LocationService: LocationService) {}

  ngOnInit() {}
}
