import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnquiriesComponent } from './all-enquiries.component';

describe('AllEnquiriesComponent', () => {
  let component: AllEnquiriesComponent;
  let fixture: ComponentFixture<AllEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEnquiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
