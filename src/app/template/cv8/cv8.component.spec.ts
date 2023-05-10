import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv8Component } from './cv8.component';

describe('Cv8Component', () => {
  let component: Cv8Component;
  let fixture: ComponentFixture<Cv8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
