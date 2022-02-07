import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnginnersComponent } from './show-enginners.component';

describe('ShowEnginnersComponent', () => {
  let component: ShowEnginnersComponent;
  let fixture: ComponentFixture<ShowEnginnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEnginnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEnginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
