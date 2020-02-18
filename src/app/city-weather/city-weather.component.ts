import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() city;

  constructor() { }

  ngOnInit(): void {
  }

}
