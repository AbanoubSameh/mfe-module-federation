import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAAboutComponent } from './feature-a-about.component';

describe('FeatureAAboutComponent', () => {
  let component: FeatureAAboutComponent;
  let fixture: ComponentFixture<FeatureAAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
