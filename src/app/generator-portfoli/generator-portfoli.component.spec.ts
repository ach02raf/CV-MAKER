import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPortfoliComponent } from './generator-portfoli.component';

describe('GeneratorPortfoliComponent', () => {
  let component: GeneratorPortfoliComponent;
  let fixture: ComponentFixture<GeneratorPortfoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorPortfoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratorPortfoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
