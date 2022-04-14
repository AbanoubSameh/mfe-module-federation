import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityWidgetComponent } from './capacity-widget.component';

describe('CapacityWidgetComponent', () => {
  let component: CapacityWidgetComponent;
  let fixture: ComponentFixture<CapacityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
