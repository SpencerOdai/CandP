import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { LoadingComponent, SearchBarComponent, UserCardComponent } from 'src/tests';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent, UserCardComponent, SearchBarComponent, FilterPipe, LoadingComponent ],
      imports: [ HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openMenu users$ to be defined', fakeAsync(() => {
    spyOn(component['appService'], 'getUsers').and.callFake(() => of([{id: 1, name: 'John'}] as any));
    component.ngOnInit();

    tick();
    expect(component.users$).toBeDefined();
    expect(component.filterList).toEqual(['J']);
  }));

  it('should search user', () => {
    component.searchUser('J');
    expect(component.filterVal).toEqual('J');
  });
});
