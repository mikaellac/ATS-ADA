import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zip'
})
export class ZipPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0,5)+'-'+value.slice(5);
  }

}
