import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbToolTipsComponent } from './ab-tool-tips.component';

describe('AbToolTipsComponent', () => {
  let component: AbToolTipsComponent;
  let fixture: ComponentFixture<AbToolTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbToolTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbToolTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
