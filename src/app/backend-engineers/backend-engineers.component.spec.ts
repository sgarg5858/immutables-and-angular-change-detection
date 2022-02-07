import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendEngineersComponent } from './backend-engineers.component';

describe('BackendEngineersComponent', () => {
  let component: BackendEngineersComponent;
  let fixture: ComponentFixture<BackendEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendEngineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
