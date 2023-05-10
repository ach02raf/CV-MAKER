import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv4Component } from './cv4.component';

describe('Cv4Component', () => {
  let component: Cv4Component;
  let fixture: ComponentFixture<Cv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
