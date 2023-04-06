import { WeatherConditionModel } from "./weather-condition.model";

export class CurrentModel{
    cloud:number;
    feelslike_c:number;
    humidity:number;
    temp_c:number;
    wind_kph:number;
    wind_dir:string;
    condition:WeatherConditionModel;
    
}