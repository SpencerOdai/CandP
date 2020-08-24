import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailComponent } from 'src/app/pages/users/detail/detail.component';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let compiled: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    component.data = {
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

  it('should call openDialog method', () => {
    const spy = spyOn(component, 'openDialog');
    const detailEle: HTMLDivElement = compiled.querySelector('.user-card>.detail');

    detailEle.click();

    expect(spy).toHaveBeenCalledWith(component.data);
  });

  it('should call open method on dialog class', () => {
    const spy = spyOn(component.dialog, 'open');
    const detailEle: HTMLDivElement = compiled.querySelector('.user-card>.detail');

    detailEle.click();

    expect(spy).toHaveBeenCalledWith(UserDetailComponent, {data: component.data});
  });
});
