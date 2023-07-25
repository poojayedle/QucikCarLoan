import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbusmentComponent } from './loan-disbusment.component';

describe('loandisbus', () => {
  let component: LoanDisbusmentComponent;
  let fixture: ComponentFixture<LoanDisbusmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDisbusmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDisbusmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
