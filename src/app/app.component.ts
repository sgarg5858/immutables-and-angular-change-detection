import { Component, OnInit } from '@angular/core';
import { Engineer } from './models/engineer.interface';
import {List} from 'immutable'
import * as Immutable from 'immutable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'immutables-in-angular';

  frontendEngineers:List<Engineer>=List([]);
  backendEngineers:List<Engineer>=List([]);

  ngOnInit(): void {
    console.log("App Init")
      this.addEngineers();
  }

  addEngineers()
  {
    const frontend:Engineer[]=[];
    const backend:Engineer[]=[];
    for(let i=0;i<1000;i++)
    {
      frontend.push({name:`Frontend Enginner ${i}`,id:i+1,skillLevel:(i%10)*10+10,salary:0,domain:'Frontend'});
      backend.push({name:`Backend Enginner ${i}`,id:i+1,skillLevel:(i*10)*10+10,salary:0,domain:'Backend'})
    }
    this.frontendEngineers=List(frontend);
    this.backendEngineers=List(backend);
    console.log(this.frontendEngineers);
  }

  addNewEngineer(frontend:Engineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.frontendEngineers=this.frontendEngineers.push(frontend);
  }
  addNewBackendEngineer(backend:Engineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.backendEngineers=this.backendEngineers.push(backend);
  }

}
