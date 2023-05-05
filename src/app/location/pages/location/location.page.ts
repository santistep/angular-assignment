import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SearchComponent } from '../../components/search/search.component';
import { CityListComponent } from '../../components/city-list/city-list.component';
import { AddedCityListComponent } from '../../components/added-city-list/added-city-list.component';

import { LocationService } from '../../location.service';
import { NavBarComponent } from '../../components/assets/nav-bar/nav-bar.component';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    SearchComponent,
    CityListComponent,
    AddedCityListComponent,
    NavBarComponent,
  ],
})
export class LocationPage {
  title: string = 'Add a New Location';

  get cityList() {
    // console.log('se ejecuta el getter de home');
    return this.LocationService.CityList;
  }

  constructor(private LocationService: LocationService) {}
}
