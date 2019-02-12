import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilmeldteBegivenhederComponent } from './tilmeldte-begivenheder.component';

describe('TilmeldteBegivenhederComponent', () => {
  let component: TilmeldteBegivenhederComponent;
  let fixture: ComponentFixture<TilmeldteBegivenhederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilmeldteBegivenhederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilmeldteBegivenhederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
