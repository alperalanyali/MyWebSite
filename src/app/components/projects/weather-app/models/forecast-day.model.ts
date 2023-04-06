import { DayModel } from "./day.model";
import { ForecastHour } from "./hour.model";

export class ForecastDay{
    date:string;
    day:DayModel;
    hour:ForecastHour[] = [];
}