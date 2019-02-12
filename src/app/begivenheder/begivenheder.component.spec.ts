import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegivenhederComponent } from './begivenheder.component';

describe('BegivenhederComponent', () => {
  let component: BegivenhederComponent;
  let fixture: ComponentFixture<BegivenhederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegivenhederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegivenhederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
