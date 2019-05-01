import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: any, sortValue:number): any {
    var result = value.sort((a,b) => {
        if(a > b) return sortValue;
        else if (a<b) return -sortValue;
        else return 0;
    });
    return [...result];
  }

}
