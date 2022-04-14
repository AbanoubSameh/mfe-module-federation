import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteComponentWrapperComponent } from './remote-component-wrapper.component';

describe('RemoteComponentWrapperComponent', () => {
  let component: RemoteComponentWrapperComponent;
  let fixture: ComponentFixture<RemoteComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteComponentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
