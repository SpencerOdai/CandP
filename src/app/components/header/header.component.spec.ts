import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule],
      providers: [
        AppService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openMenu property should be true', () => {
    component['appService'].openMenu = true;
    expect(component.openMenu).toBe(true);
  });

  it('openMenu property should be toggled', () => {

    component.toggleMenu();

    expect(component.openMenu).toBe(true);
  });

  it('openMenu user$ to be defined', fakeAsync(() => {
    spyOn(component['appService'], 'getUser').and.callFake(id => of({id, name: 'John'}));
    component.ngOnInit();

    tick();
    expect(component.user$).toBeDefined();
  }));

});
