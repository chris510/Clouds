import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subject, Subscription } from 'rxjs';

import { City, cityWeather } from '../city.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  cities: cityWeather[] = [];
  newCitySub: Subscription;
  cityName = 'Fremont';
  foundWeather = false;
  cityObject;
  citySub: Subscription;
  // temp: string;
  // pressure: string;
  // description: string;
  // windSpeed: string;
  // windDegree: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.newCitySub = this.weatherService.city.subscribe(
      (newCity: City) => {
        console.log(newCity);
        this.cities.push(newCity);
        console.log(this.cities);
      }
    )
  }

  onSubmit() {
    console.log(this.cityName);
    this.citySub = this.weatherService.getWeatherByName(this.cityName).subscribe(
      cityData => {
        this.weatherService.createCityForecast(cityData, this.cityName);
        this.foundWeather = true;
      }
    )
    // console.log(this.cityObject);
  }

  ngOnDestroy() {
    this.citySub.unsubscribe();
  }

}
