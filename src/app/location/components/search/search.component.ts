import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SearchComponent implements OnInit {
  @ViewChild('txtInput') txtInput: any = '';

  onClear() {
    const searchInput = '';
    this.LocationService.onTextInput(searchInput);
    this.txtInput?.setFocus();
  }

  searchCity(): void {
    const searchInput = this.txtInput.value;
    this.LocationService.onTextInput(searchInput);
  }

  ngOnInit() {
    // this.txtInput?.setFocus();
  }

  constructor(private LocationService: LocationService) {}
}
