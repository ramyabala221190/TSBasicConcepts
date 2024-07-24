import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExamplesComponent } from './interface-examples.component';

describe('InterfaceExamplesComponent', () => {
  let component: InterfaceExamplesComponent;
  let fixture: ComponentFixture<InterfaceExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceExamplesComponent]
    });
    fixture = TestBed.createComponent(InterfaceExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
