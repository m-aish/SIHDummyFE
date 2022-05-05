import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgenerateComponent } from './formgenerate.component';

describe('FormgenerateComponent', () => {
  let component: FormgenerateComponent;
  let fixture: ComponentFixture<FormgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
