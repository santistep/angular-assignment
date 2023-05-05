import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { LocationPage } from '../location/location.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LocationPage],
})
export class ModalPage implements OnInit {
  public title: string = 'Add a New Location';

  exitModal() {
    this.modalCtrl.dismiss();
  }
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
}
