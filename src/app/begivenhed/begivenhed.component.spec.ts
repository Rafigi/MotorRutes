import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegivenhedComponent } from './begivenhed.component';

describe('BegivenhedComponent', () => {
  let component: BegivenhedComponent;
  let fixture: ComponentFixture<BegivenhedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegivenhedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegivenhedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
