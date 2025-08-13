import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], search : string,key:string): any {
    console.log(value,search,key)
    return value.filter(e => e[key].toLowerCase().includes(search.toLowerCase()))
  }

}
