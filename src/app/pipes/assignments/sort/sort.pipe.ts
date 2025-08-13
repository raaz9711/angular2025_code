import { Pipe, PipeTransform } from '@angular/core';

export type SortDir = 'asc' | 'desc'

@Pipe({
  name: 'sort',
  standalone : true,
  pure : true
})
export class SortPipe implements PipeTransform {
//<li *ngFor="let user of users | sort:'age':'asc'">{{ user.name }}</li>
  transform<T>(
    items : readonly T[] | null | undefined,
    key : keyof T,
    dir : SortDir = 'asc'
  ) : T[] 
  {
    console.log(items,key,dir,dir === 'asc')
if( items == null || items == undefined || items.length === 0) return [];
const factor = dir === 'asc' ? 1 : -1;

console.log(factor)
const a =  [...items].sort( (a,b) => 
  {
     const av = a[key] as unknown as (number | string | Date | null | undefined);
    const bv = b[key] as unknown as (number | string | Date | null | undefined);
         // Handle nullish safely

      if (av == null && bv == null) return 0;
      if (av == null) return 1 * factor;
      if (bv == null) return -1 * factor;

  // Date -> number value, fallback to string compare
      const va = av instanceof Date ? av.getTime() : (av as any);
      const vb = bv instanceof Date ? bv.getTime() : (bv as any);

       if (va < vb) return -1 * factor;
      if (va > vb) return  1 * factor;
      return 0;


    });

    console.log(a);
    return a;


  }

}
