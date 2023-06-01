import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectDetailsComponentComponent } from './defect-details-component.component';

describe('DefectDetailsComponentComponent', () => {
  let component: DefectDetailsComponentComponent;
  let fixture: ComponentFixture<DefectDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
