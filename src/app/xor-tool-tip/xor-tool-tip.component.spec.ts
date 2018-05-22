import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XorToolTipComponent } from './xor-tool-tip.component';

describe('XorToolTipComponent', () => {
  let component: XorToolTipComponent;
  let fixture: ComponentFixture<XorToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XorToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XorToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
