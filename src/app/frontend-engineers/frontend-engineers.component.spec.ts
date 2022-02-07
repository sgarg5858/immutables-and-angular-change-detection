import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendEngineersComponent } from './frontend-engineers.component';

describe('FrontendEngineersComponent', () => {
  let component: FrontendEngineersComponent;
  let fixture: ComponentFixture<FrontendEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendEngineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
