import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionDetailsComponent } from './sanction-details.component';

describe('SanctionDetailsComponent', () => {
  let component: SanctionDetailsComponent;
  let fixture: ComponentFixture<SanctionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
