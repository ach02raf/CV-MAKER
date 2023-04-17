import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCvComponent } from './generator-cv.component';

describe('GeneratorCvComponent', () => {
  let component: GeneratorCvComponent;
  let fixture: ComponentFixture<GeneratorCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratorCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
