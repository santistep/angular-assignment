import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/location/pages/modal/modal.page';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NavBarComponent implements OnInit {
  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    modal.present();
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  showWeatherPage() {
    this.router.navigate(['/weather']);
  }

  showNewsPage() {
    this.router.navigate(['/news']);
  }

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}
}
