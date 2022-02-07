import { Component, OnInit } from '@angular/core';
import { BackendEngineer } from './models/backend-engineer.interface';
import { FrontendEngineer } from './models/frontend-engineer.interface';
import {List} from 'immutable'
import * as Immutable from 'immutable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'immutables-in-angular';

  frontendEngineers:List<FrontendEngineer>=List([]);
  backendEngineers:List<BackendEngineer>=List([]);

  ngOnInit(): void {
    console.log("App Init")
      this.addEngineers();
  }

  addEngineers()
  {
    const frontend:FrontendEngineer[]=[];
    const backend:BackendEngineer[]=[];
    for(let i=0;i<1000;i++)
    {
      frontend.push({name:`Frontend Enginner ${i}`,id:i+1,skillLevel:(i%10)*10+10,salary:0,domain:'Frontend'});
      backend.push({name:`Backend Enginner ${i}`,id:i+1,skillLevel:(i*10)*10+10,salary:0,domain:'Backend'})
    }
    this.frontendEngineers=List(frontend);
    this.backendEngineers=List(backend);
    console.log(this.frontendEngineers);
  }

  addNewEngineer(frontend:FrontendEngineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.frontendEngineers=this.frontendEngineers.push(frontend);
  }
  addNewBackendEngineer(backend:BackendEngineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.backendEngineers=this.backendEngineers.push(backend);
  }

}
