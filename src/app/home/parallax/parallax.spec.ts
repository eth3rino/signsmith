import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax } from './parallax';

describe('Parallax', () => {
  let component: Parallax;
  let fixture: ComponentFixture<Parallax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parallax],
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
