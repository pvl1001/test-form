import dayjs, { Dayjs } from "dayjs";
import { TIME_FORMAT } from "./constants";


export function formatTime( date: Dayjs | string ): string {
   return dayjs.utc( date ).format( TIME_FORMAT )
}

