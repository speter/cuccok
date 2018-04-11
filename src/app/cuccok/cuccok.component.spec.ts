import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuccokComponent } from './cuccok.component';

describe('CuccokComponent', () => {
  let component: CuccokComponent;
  let fixture: ComponentFixture<CuccokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuccokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuccokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
