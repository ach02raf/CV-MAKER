import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv3Component } from './cv3.component';

describe('Cv3Component', () => {
  let component: Cv3Component;
  let fixture: ComponentFixture<Cv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
