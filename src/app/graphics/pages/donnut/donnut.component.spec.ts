import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnutComponent } from './donnut.component';

describe('DonnutComponent', () => {
  let component: DonnutComponent;
  let fixture: ComponentFixture<DonnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
