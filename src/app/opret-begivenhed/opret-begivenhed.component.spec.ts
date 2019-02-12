import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretBegivenhedComponent } from './opret-begivenhed.component';

describe('OpretBegivenhedComponent', () => {
  let component: OpretBegivenhedComponent;
  let fixture: ComponentFixture<OpretBegivenhedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpretBegivenhedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretBegivenhedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
