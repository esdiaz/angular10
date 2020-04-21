import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'secondsToTimeTransform'
})
export class SecondsToTimeFormat implements PipeTransform {

  transform(seconds: number, showMinutes: boolean): string {
    // 3600 => 1hr
    // 3660 => 1hr1min

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);

    return `${hours}hrs ${minutes}mins`;
  }
}
