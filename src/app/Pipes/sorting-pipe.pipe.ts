import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingPipe'
})
export class SortingPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
