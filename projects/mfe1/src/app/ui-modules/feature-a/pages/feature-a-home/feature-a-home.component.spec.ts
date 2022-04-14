import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAHomeComponent } from './feature-a-home.component';

describe('FeatureAHomeComponent', () => {
  let component: FeatureAHomeComponent;
  let fixture: ComponentFixture<FeatureAHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
