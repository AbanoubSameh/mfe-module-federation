import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBHomeComponent } from './feature-b-home.component';

describe('FeatureBHomeComponent', () => {
  let component: FeatureBHomeComponent;
  let fixture: ComponentFixture<FeatureBHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
