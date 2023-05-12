import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceComponent } from './experince.component';

describe('ExperinceComponent', () => {
  let component: ExperinceComponent;
  let fixture: ComponentFixture<ExperinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
