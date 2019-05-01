import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, end: any): any {
    return value.substr(0,end) + '...';
  }

}
