import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynotverifiedComponent } from './displaynotverified.component';

describe('DisplaynotverifiedComponent', () => {
  let component: DisplaynotverifiedComponent;
  let fixture: ComponentFixture<DisplaynotverifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaynotverifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynotverifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
