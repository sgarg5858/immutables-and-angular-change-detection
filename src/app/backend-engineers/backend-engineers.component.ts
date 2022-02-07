import { Component, OnInit,Input } from '@angular/core';
import {BackendEngineer} from '../models/backend-engineer.interface';
@Component({
  selector: 'app-backend-engineers',
  templateUrl: './backend-engineers.component.html',
  styleUrls: ['./backend-engineers.component.scss']
})
export class BackendEngineersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() backendEngineers:BackendEngineer[]=[];


 

  calculateSalary(skillLevel:number):number
  {
    console.log(skillLevel,"Backend");
    return skillLevel * 5000;
  }

}
