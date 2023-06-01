import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectListComponentComponent } from './defect-list-component.component';

describe('DefectListComponentComponent', () => {
  let component: DefectListComponentComponent;
  let fixture: ComponentFixture<DefectListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
