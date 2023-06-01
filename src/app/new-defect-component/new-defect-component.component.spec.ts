import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDefectComponentComponent } from './new-defect-component.component';

describe('NewDefectComponentComponent', () => {
  let component: NewDefectComponentComponent;
  let fixture: ComponentFixture<NewDefectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDefectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDefectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
