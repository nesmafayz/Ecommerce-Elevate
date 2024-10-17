import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number=20): string {
const words = value.split('');
if(words.length > limit)
{
return words.slice(0,limit).join('')+'...';
}
return value;
  }

}
