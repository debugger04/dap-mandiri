import { Pipe, PipeTransform } from '@angular/core';
import { format, Locale } from 'date-fns';
import { ja } from 'date-fns/locale';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date, formatDate: string, locale: Locale = ja): unknown {
    return format(value, formatDate, { locale });
  }

}
