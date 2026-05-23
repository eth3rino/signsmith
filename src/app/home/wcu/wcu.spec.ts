import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcu } from './wcu';

describe('Wcu', () => {
  let component: Wcu;
  let fixture: ComponentFixture<Wcu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wcu],
    }).compileComponents();

    fixture = TestBed.createComponent(Wcu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
