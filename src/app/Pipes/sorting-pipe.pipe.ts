import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingPipe'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
