import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilscoreComponent } from './cibilscore.component';

describe('CibilscoreComponent', () => {
  let component: CibilscoreComponent;
  let fixture: ComponentFixture<CibilscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibilscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
