import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./location/pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./location/pages/location/location.page').then(
        (m) => m.LocationPage
      ),
  },
  {
    path: 'modal',
    loadComponent: () =>
      import('./location/pages/modal/modal.page').then((m) => m.ModalPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    loadComponent: () =>
      import('./location/pages/weather/weather.page').then(
        (m) => m.WeatherPage
      ),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./location/pages/news/news.page').then((m) => m.NewsPage),
  },
];
