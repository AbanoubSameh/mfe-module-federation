import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWidgetComponent } from './production-widget.component';

describe('ProductionWidgetComponent', () => {
  let component: ProductionWidgetComponent;
  let fixture: ComponentFixture<ProductionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
