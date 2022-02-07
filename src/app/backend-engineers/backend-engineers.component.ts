import { Component, OnInit,Input,Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Engineer} from '../models/engineer.interface';
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


  ngOnInit(): void {
  }

  @Input() backendEngineers:List<Engineer>=List([]);
  @Output() newEngineerComing= new EventEmitter<Engineer>();

  

  newEngineer(name:string)
  {
    this.newEngineerComing.emit({
      name,
      skillLevel:20,
      domain:'Backend',
      salary:0,
      id:101
    })
  }

}
