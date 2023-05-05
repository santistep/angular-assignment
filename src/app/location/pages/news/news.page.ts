import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from '../../components/assets/nav-bar/nav-bar.component';
import { LocationService } from '../../location.service';
import { CityData } from '../../interfaces/location.interface';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavBarComponent,
    NewsCardComponent,
  ],
})
export class NewsPage implements OnInit {
  get checkedCities(): CityData[] {
    return this.LocationService.checkedCities;
  }

  constructor(private LocationService: LocationService) {}

  ngOnInit() {}
}
