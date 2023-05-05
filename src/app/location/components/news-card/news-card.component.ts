import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocationService } from '../../location.service';
import { CityData } from '../../interfaces/location.interface';
import { TechNewsData } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class NewsCardComponent implements OnInit {
  @Input('city') city?: CityData;

  public newsTitle?: string;
  public newsUrl?: string;

  onRemovedCity(city?: CityData) {
    this.LocationService.onRemovedCity(city);
  }

  print() {
    // console.log('this.newsUrl ->>', this.newsUrl);
  }

  constructor(
    private LocationService: LocationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const baseUrl = 'https://api.nytimes.com/svc/search/v2';

    const params = new HttpParams()
      .set('sort', 'newest')
      .set('fq', `glocations:("${this.city?.name}")`)
      .set('api-key', 'LnoN1yiiAS9xij7ASnIHVPLLAJk1aQlW');
    this.http
      .get<TechNewsData>(`${baseUrl}/articlesearch.json`, { params })
      .subscribe(
        (resp) => {
          if (resp.status === 'OK') {
            console.log('NYT response', resp);
            let newsData = resp.response.docs[0];
            this.newsTitle = newsData.headline.main;
            this.newsUrl = newsData.web_url;
          }
        },
        (err: any) => {
          console.log('API Rate limit Quota Violation');
        }
      );
  }
}

// https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Technology") AND glocations:("NEW YORK CITY")&api-key=LnoN1yiiAS9xij7ASnIHVPLLAJk1aQlW
