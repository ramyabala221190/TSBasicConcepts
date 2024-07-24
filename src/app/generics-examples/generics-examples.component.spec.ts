import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsExamplesComponent } from './generics-examples.component';

describe('GenericsExamplesComponent', () => {
  let component: GenericsExamplesComponent;
  let fixture: ComponentFixture<GenericsExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericsExamplesComponent]
    });
    fixture = TestBed.createComponent(GenericsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
