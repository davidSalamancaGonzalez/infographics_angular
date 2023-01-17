import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsDoubleComponent } from './bars-double.component';

describe('BarsDoubleComponent', () => {
  let component: BarsDoubleComponent;
  let fixture: ComponentFixture<BarsDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsDoubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarsDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
