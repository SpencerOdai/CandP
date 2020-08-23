import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileItemsComponent } from './user-profile-items.component';

describe('UserProfileItemsComponent', () => {
  let component: UserProfileItemsComponent;
  let fixture: ComponentFixture<UserProfileItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
