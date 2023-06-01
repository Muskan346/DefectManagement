import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsReportComponentComponent } from './defects-report-component.component';

describe('DefectsReportComponentComponent', () => {
  let component: DefectsReportComponentComponent;
  let fixture: ComponentFixture<DefectsReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectsReportComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectsReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
