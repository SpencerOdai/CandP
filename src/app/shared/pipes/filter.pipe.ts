import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], ...args: string[]): any[] {

    const filterVal = args[0];
    const filterProp = args[1];
    if (arr && arr.length > 0 && filterVal){
      args.shift();
      return arr.filter(item => item[filterProp].indexOf(filterVal) > -1);
    } else{
      return arr;
    }
  }

}
