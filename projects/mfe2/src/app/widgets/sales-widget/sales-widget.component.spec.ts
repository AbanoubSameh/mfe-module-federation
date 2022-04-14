import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesWidgetComponent } from './sales-widget.component';

describe('SalesWidgetComponent', () => {
  let component: SalesWidgetComponent;
  let fixture: ComponentFixture<SalesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
