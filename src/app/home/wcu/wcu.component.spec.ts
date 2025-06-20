import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcuComponent } from './wcu.component';

describe('WcuComponent', () => {
  let component: WcuComponent;
  let fixture: ComponentFixture<WcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WcuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
