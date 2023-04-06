import { WeatherConditionModel } from "./weather-condition.model";

export class ForecastHour{
    cloud:number;
    condition:WeatherConditionModel;
    time:string;
    temp_c:number;
    wind_dir:string;
    wind_kph:number;
}