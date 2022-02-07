import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { List } from 'immutable';
import { FrontendEngineer } from '../models/frontend-engineer.interface';

@Component({
  selector: 'app-frontend-engineers',
  templateUrl: './frontend-engineers.component.html',
  styleUrls: ['./frontend-engineers.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FrontendEngineersComponent implements OnInit {

  constructor() { }
  @Output() newEngineerComing= new EventEmitter<FrontendEngineer>();

  addEngineer= new FormControl('',[Validators.required]);

  @Input() frontendEngineers:List<FrontendEngineer>=List([]);


  ngOnInit(): void {
  }

  calculateSalary(skillLevel:number):number
  {
    console.log(skillLevel,"Frontend");
    return skillLevel * 5000;
  }

  newEngineer()
  {
    this.newEngineerComing.emit({
      name:this.addEngineer.value,
      skillLevel:20,
      domain:'Frontend',
      salary:0,
      id:101
    })
  }

}

