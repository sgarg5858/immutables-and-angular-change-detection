import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'
@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  @memo()
  transform(skillValue: number, ): number {
    console.log(skillValue);
    return skillValue * 5000;;
  }

}
