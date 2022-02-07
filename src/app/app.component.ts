import { Component, OnInit } from '@angular/core';
import { BackendEngineer } from './models/backend-engineer.interface';
import { FrontendEngineer } from './models/frontend-engineer.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'immutables-in-angular';
  frontendEngineers:FrontendEngineer[]=[];
  backendEngineers:BackendEngineer[]=[];

  ngOnInit(): void {
    console.log("App Init")
      this.addEngineers();
  }

  addEngineers()
  {
    for(let i=0;i<100;i++)
    {
      this.frontendEngineers.push({name:`Frontend Enginner ${i}`,id:i+1,skillLevel:(i%10)*10+10,salary:0,domain:'Frontend'});
      this.backendEngineers.push({name:`Backend Enginner ${i}`,id:i+1,skillLevel:(i*10)*10+10,salary:0,domain:'Backend'})
    }
    console.log(this.frontendEngineers);
  }

  addNewEngineer(frontend:FrontendEngineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.frontendEngineers=this.frontendEngineers.concat([frontend]);
  }
  addNewBackendEngineer(backend:BackendEngineer)
  {
    //concat returns new copy of array it doesn't mutate existing arrays
    this.backendEngineers = this.backendEngineers.concat([backend]);
  }

}
