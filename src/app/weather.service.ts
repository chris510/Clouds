import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Subject} from 'rxjs';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey = 'b49efff4958f5a327b58d37248253184';
  weatherService = new Subject<any>();
  city = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }


  getWeatherByName(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b49efff4958f5a327b58d37248253184`
    )
  }

  getForecastByName(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.apiKey}`
    )
  }

  createCityForecast(cityData: object, cityName: string) {
    let newCity = new City();
    let dayWeather = cityData['list'][0];
    newCity.name = cityName;
    newCity.temp = dayWeather['main']['temp'];
    newCity.pressure = dayWeather['main']['pressure'];
    newCity.description = dayWeather['weather'][0]['description'];
    newCity.windSpeed = dayWeather['wind']['speed'];
    newCity.windDegree = dayWeather['wind']['deg'];

    this.city.next(newCity);
  }
}
