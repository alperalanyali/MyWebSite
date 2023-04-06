import { CurrentModel } from "./current.model";
import { ForecastModel } from "./forecast.model";
import { LocationModel } from "./location.model";

export class WeatherResponse{
    current:CurrentModel;
    location:LocationModel;
    forecast:ForecastModel;
}