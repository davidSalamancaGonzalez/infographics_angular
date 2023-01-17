import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicBarComponent } from './graphic-bar.component';

describe('GraphicBarComponent', () => {
  let component: GraphicBarComponent;
  let fixture: ComponentFixture<GraphicBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
