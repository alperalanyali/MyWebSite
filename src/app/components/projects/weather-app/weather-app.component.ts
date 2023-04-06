import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { WeatherResponse } from './models/weather-response.model';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {
  constructor(private _http:HttpClient){
    
  }
  weatherResponse = new WeatherResponse();
  title="Weathet App";
  getData(form:NgForm){
    let city = form.controls["city"].value;
    let days = form.controls["days"].value;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=22ff574018264d8fa9480800230504&q=${city}&days=${days}&aqi=yes&alerts=no`;
    let data = this._http.get<WeatherResponse>(apiUrl).subscribe(data => {
      // console.log(data);
      this.weatherResponse = data;
      console.log(this.weatherResponse.forecast.forecastday);
      let currentWeather = document.getElementById('currentWeather') as HTMLElement;
      let classList = currentWeather.classList
      classList.remove('invisible')

    })
  }
}
