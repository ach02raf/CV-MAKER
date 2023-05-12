import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioReviweComponent } from './portfolio-reviwe.component';

describe('PortfolioReviweComponent', () => {
  let component: PortfolioReviweComponent;
  let fixture: ComponentFixture<PortfolioReviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioReviweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioReviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
