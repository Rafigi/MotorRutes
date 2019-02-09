import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretProfilComponent } from './opret-profil.component';

describe('OpretProfilComponent', () => {
  let component: OpretProfilComponent;
  let fixture: ComponentFixture<OpretProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpretProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
