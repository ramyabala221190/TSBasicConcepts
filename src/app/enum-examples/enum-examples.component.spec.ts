import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumExamplesComponent } from './enum-examples.component';

describe('EnumExamplesComponent', () => {
  let component: EnumExamplesComponent;
  let fixture: ComponentFixture<EnumExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnumExamplesComponent]
    });
    fixture = TestBed.createComponent(EnumExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
