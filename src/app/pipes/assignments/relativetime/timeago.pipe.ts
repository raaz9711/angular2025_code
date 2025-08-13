import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {
//{{ '2025-07-18T08:00:00Z' | timeAgo }}
  transform(value: string): string {
    let v = Number.parseInt(value);
    let c = new Date().getTime();
    //console.log(value,'v',v,'c',c,new Date().setHours(21).toString());

     const differenceInMinutes = (c-v) / (1000 * 60);

    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;
    return hours + ' Hour ' + Math.floor(minutes) + ' minutes ago' ;
  }

}
