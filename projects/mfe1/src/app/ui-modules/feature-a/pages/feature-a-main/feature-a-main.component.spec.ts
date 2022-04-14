import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAMainComponent } from './feature-a-main.component';

describe('FeatureAMainComponent', () => {
  let component: FeatureAMainComponent;
  let fixture: ComponentFixture<FeatureAMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
