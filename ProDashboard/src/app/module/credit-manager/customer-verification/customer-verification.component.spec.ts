import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVerificationComponent } from './customer-verification.component';

describe('CustomerVerificationComponent', () => {
  let component: CustomerVerificationComponent;
  let fixture: ComponentFixture<CustomerVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
