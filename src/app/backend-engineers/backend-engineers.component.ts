import { Component, OnInit,Input,Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {BackendEngineer} from '../models/backend-engineer.interface';
import {FormControl,Validators} from '@angular/forms'
import { List } from 'immutable';
@Component({
  selector: 'app-backend-engineers',
  templateUrl: './backend-engineers.component.html',
  styleUrls: ['./backend-engineers.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BackendEngineersComponent implements OnInit {

  constructor() { }

  addEngineer= new FormControl('',[Validators.required]);

  ngOnInit(): void {
  }

  @Input() backendEngineers:List<BackendEngineer>=List([]);
  @Output() newEngineerComing= new EventEmitter<BackendEngineer>();


 

  calculateSalary(skillLevel:number):number
  {
    console.log(skillLevel,"Backend");
    return skillLevel * 5000;
  }

  newEngineer()
  {
    this.newEngineerComing.emit({
      name:this.addEngineer.value,
      skillLevel:20,
      domain:'Backend',
      salary:0,
      id:101
    })
  }

}
