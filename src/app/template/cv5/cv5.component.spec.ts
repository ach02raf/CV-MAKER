import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv5Component } from './cv5.component';

describe('Cv5Component', () => {
  let component: Cv5Component;
  let fixture: ComponentFixture<Cv5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
