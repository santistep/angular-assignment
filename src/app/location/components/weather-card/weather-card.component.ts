import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../../location.service';
import { CityData } from '../../interfaces/location.interface';
import { WeatherData } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherCardComponent implements OnInit {
  @Input('city') city?: CityData;

  public temp: number = 0;
  public feelsLike: number = 0;
  public weather: string = '';
  public description: string = '';

  onRemovedCity(city?: CityData) {
    this.LocationService.onRemovedCity(city);
  }

  iconName(weather: string) {
    let name!: string;
    switch (weather) {
      case 'Clouds':
        name = 'cloud-outline';
        break;
      case 'Haze':
        name = 'cloud-outline';
        break;
      case 'Clear':
        name = 'sunny-outline';
        break;
      case 'Rain':
        name = 'rainy-outline';
        break;
      default:
        'cloud-outline';
    }
    return name;
  }

  weatherClass(weather: string) {
    let wClass!: string;
    switch (weather) {
      case 'Clouds':
        wClass = 'clouds';
        break;
      case 'Haze':
        wClass = 'haze';
        break;
      case 'Rain':
        wClass = 'rain';
        break;
      case 'Clear':
        wClass = 'sunny';
        break;
      case 'Snow':
        wClass = 'snow';
        break;
      case 'Storm':
        wClass = 'storm';
        break;
      default:
        'clouds';
        break;
    }
    return wClass;
  }

  constructor(
    private http: HttpClient,
    private LocationService: LocationService
  ) {}

  ngOnInit() {
    const baseUrl = 'https://api.openweathermap.org/data/2.5';

    const params = new HttpParams()
      .set('lat', this.city!.lat)
      .set('lon', this.city!.lon)
      .set('appid', 'd807e934b2072121372431622d84fe8f');

    this.http
      .get<WeatherData>(`${baseUrl}/weather`, { params })
      .subscribe((resp) => {
        // console.log('response -> ', resp);
        const descArr = resp.weather[0].description
          .toLocaleLowerCase()
          .split(' ');
        if (resp.weather[0].main === 'Drizzle') {
          this.weather = 'Rain';
        } else if (
          resp.weather[0].main === 'Mist' ||
          resp.weather[0].main === 'Fog'
        ) {
          this.weather = 'Haze';
        } else if (descArr.includes('thunder') || descArr.includes('storm')) {
          this.weather = 'Storm';
        } else {
          this.weather = resp.weather[0].main;
          // this.weather = 'Storm';
          // this.weather = 'Snow';
        }
        this.temp = resp.main.temp - 273.15;
        this.feelsLike = resp.main.temp - 273.15;
        this.description = resp.weather[0].description;
      });
  }
}
