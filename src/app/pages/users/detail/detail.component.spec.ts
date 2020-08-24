import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavHeaderComponent, UserProfileItemsComponent } from 'src/tests';
import { UserDetailComponent } from './detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent, UserProfileItemsComponent, NavHeaderComponent ],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {} },
        {provide: MAT_DIALOG_DATA, useValue: {data: null} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
