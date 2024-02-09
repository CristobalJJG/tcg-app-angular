import { Pipe, PipeTransform } from '@angular/core';
import { CardInfo } from '../models/info';

@Pipe({
  name: 'tcgQuery'
})
export class TcgQueryPipe implements PipeTransform {

  transform(value: CardInfo): string {
    return `name:${value.name}*`;
  }


}
