import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { List } from 'immutable';
import { Engineer } from '../models/engineer.interface';

@Component({
  selector: 'app-frontend-engineers',
  templateUrl: './frontend-engineers.component.html',
  styleUrls: ['./frontend-engineers.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FrontendEngineersComponent implements OnInit {

  constructor() { }
  @Output() newEngineerComing= new EventEmitter<Engineer>();
  @Input() frontendEngineers:List<Engineer>=List([]);
  ngOnInit(): void {
  }

 
  newEngineer(name:string)
  {
    this.newEngineerComing.emit({
      name,
      skillLevel:20,
      domain:'Frontend',
      salary:0,
      id:101
    })
  }

}

