import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBAboutComponent } from './feature-b-about.component';

describe('FeatureBAboutComponent', () => {
  let component: FeatureBAboutComponent;
  let fixture: ComponentFixture<FeatureBAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
