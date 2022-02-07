import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Engineer } from '../models/engineer.interface';

@Component({
  selector: 'app-show-engineers',
  templateUrl: './show-enginners.component.html',
  styleUrls: ['./show-enginners.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShowEnginnersComponent implements OnInit {

  constructor() { }

  @Input() engineers:List<Engineer>=List([]);

  ngOnInit(): void {
  }

  calculateSalary(skillLevel:number):number
  {
    console.log(skillLevel,"Backend");
    return skillLevel * 5000;
  }

}
