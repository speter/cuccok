import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuccComponent } from './cucc.component';

describe('CuccComponent', () => {
  let component: CuccComponent;
  let fixture: ComponentFixture<CuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
