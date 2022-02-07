import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.scss']
})
export class AddEngineerComponent implements OnInit {

  @Input() engineerType:string="";
  addEngineer= new FormControl('',[Validators.required]);
  @Output() engineertoAdd = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  newEngineer()
  {
    this.engineertoAdd.emit(this.addEngineer.value);
  }

}
