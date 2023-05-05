import { Injectable, OnInit } from '@angular/core';

// TODO import Data into the service.
import packageInfo from '../../data/data.json';
import { CityData, CityList } from './interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private data: CityList = packageInfo;
  private cityListCopy: CityData[] = this.data.cityData;
  private searchText = '';
  private _checkedCities: CityData[] = [];

  get CityList() {
    for (let i = 0; i < this.data.cityData.length; i++) {
      this.data.cityData[i].id = i;
    }
    // console.log('cityData con ID >', this.data.cityData);

    if (this.searchText !== '') {
      // console.log('City copy > ', this.cityListCopy);
      return [...this.cityListCopy];
    }
    // console.log('retorna esto > ', [...this.data.cityData]);
    return [...this.data.cityData];
  }

  get checkedCities(): CityData[] {
    return this._checkedCities;
  }

  onTextInput(searchText: string): void {
    let searchResults = this.data.cityData.filter((city) =>
      city.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    this.searchText = searchText;
    this.cityListCopy = searchResults;
  }

  onCityAdedd(city: CityData) {
    let isCityAdedd: boolean = this._checkedCities.includes(city);
    if (!isCityAdedd) {
      this._checkedCities.push(city);
      this.data.cityData = this.data.cityData.filter(
        (c) => c.name !== city.name
      );
    }
  }

  onRemovedCity(city: any) {
    this._checkedCities = this._checkedCities.filter(
      (c) => c.name !== city.name
    );
    this.data.cityData.unshift(city);
  }

  constructor() {}
}
