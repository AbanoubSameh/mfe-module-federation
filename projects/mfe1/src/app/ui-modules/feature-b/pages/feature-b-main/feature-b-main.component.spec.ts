import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBMainComponent } from './feature-b-main.component';

describe('FeatureBMainComponent', () => {
  let component: FeatureBMainComponent;
  let fixture: ComponentFixture<FeatureBMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
