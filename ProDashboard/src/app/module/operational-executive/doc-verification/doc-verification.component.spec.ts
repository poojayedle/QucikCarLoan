import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocVerificationComponent } from './doc-verification.component';

describe('DocVerificationComponent', () => {
  let component: DocVerificationComponent;
  let fixture: ComponentFixture<DocVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
