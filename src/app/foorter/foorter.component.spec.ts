import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorterComponent } from './foorter.component';

describe('FoorterComponent', () => {
  let component: FoorterComponent;
  let fixture: ComponentFixture<FoorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
