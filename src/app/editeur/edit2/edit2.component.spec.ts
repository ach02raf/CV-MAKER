import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit2Component } from './edit2.component';

describe('Edit2Component', () => {
  let component: Edit2Component;
  let fixture: ComponentFixture<Edit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edit2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
