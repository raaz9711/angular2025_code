import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeName'
})
export class CustomPipeNamePipe implements PipeTransform {

  transform(value: any[], joinWith:string ): string {
    if (!value || !Array.isArray(value)) {
      return value;
    }
    value = value.filter(item => item !== null && item !== undefined).map(item => item.toString()); 
    if (value.length === 0) {
      return '';
    }
    if (value.length === 1) {
      return value[0];
    }
    return value.join(joinWith);
  }

}


@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberFormatPipe implements PipeTransform {

  transform(value: string, format : string): string {
    if (!value) return value;
    if (format === 'US') {
      return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (format === 'IN') {
      return `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    return value; // Default cas
  }

}


@Pipe({
  name:'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    if (!value) return value;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], key:string,val:string): any {
    if (!value || !Array.isArray(value) || !val || val.trim() === '' || !key) {
      return value;
    }
    console.log('FilterPipe called with value:', value, 'and search term:',);
    const ret = value.filter(item => item[key].toString().toLowerCase().includes(val.toLowerCase()));
    console.log('Filtered result:', ret);
    return ret;
  }

}
