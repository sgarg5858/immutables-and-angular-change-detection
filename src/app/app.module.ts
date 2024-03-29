import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendEngineersComponent } from './frontend-engineers/frontend-engineers.component';
import { BackendEngineersComponent } from './backend-engineers/backend-engineers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { ShowEnginnersComponent } from './show-enginners/show-enginners.component';
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontendEngineersComponent,
    BackendEngineersComponent,
    AddEngineerComponent,
    ShowEnginnersComponent,
    SalaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
