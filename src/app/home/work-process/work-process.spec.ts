import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcess } from './work-process';

describe('WorkProcess', () => {
  let component: WorkProcess;
  let fixture: ComponentFixture<WorkProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProcess],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkProcess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
