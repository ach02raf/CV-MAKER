import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv7Component } from './cv7.component';

describe('Cv7Component', () => {
  let component: Cv7Component;
  let fixture: ComponentFixture<Cv7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
