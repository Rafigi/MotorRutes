import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineBegivenhederComponent } from './mine-begivenheder.component';

describe('MineBegivenhederComponent', () => {
  let component: MineBegivenhederComponent;
  let fixture: ComponentFixture<MineBegivenhederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineBegivenhederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineBegivenhederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
