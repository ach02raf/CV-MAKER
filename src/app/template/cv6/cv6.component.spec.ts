import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv6Component } from './cv6.component';

describe('Cv6Component', () => {
  let component: Cv6Component;
  let fixture: ComponentFixture<Cv6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
