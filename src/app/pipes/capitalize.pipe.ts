import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var arrString = value.split(' ');
    var result = '';
    arrString.forEach((str, index) =>{
        result += str.charAt(0).toUpperCase() + str.substr(1) + ' ';
        console.log(index);
    });
    return result;
  }

}
