import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSanctionDetailsComponent } from './get-sanction-details.component';

describe('GetSanctionDetailsComponent', () => {
  let component: GetSanctionDetailsComponent;
  let fixture: ComponentFixture<GetSanctionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSanctionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSanctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
