import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretRuteComponent } from './opret-rute.component';

describe('OpretRuteComponent', () => {
  let component: OpretRuteComponent;
  let fixture: ComponentFixture<OpretRuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpretRuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretRuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
