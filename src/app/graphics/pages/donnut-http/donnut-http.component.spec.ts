import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnutHttpComponent } from './donnut-http.component';

describe('DonnutHttpComponent', () => {
  let component: DonnutHttpComponent;
  let fixture: ComponentFixture<DonnutHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnutHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnutHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
