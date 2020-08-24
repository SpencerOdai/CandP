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
    component.user = {
      id: 1,
      name: 'John',
      picture: 'picture',
      email: 'email@email.com',
      username: 'username',
      compant: {
        name: 'Company'
      }
  } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set age to 30', () => {
    component.user.dob = '07/01/1990',
    component.ngOnInit();
    expect(component.age).toBe(30);
  });

  it('should set age to 30', () => {
    component.user.dob = null,
    component.ngOnInit();
    expect(component.age).toBe(0);
  });
});
