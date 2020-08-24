import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavHeaderComponent } from './nav-header.component';


describe('NavHeaderComponent', () => {
  let component: NavHeaderComponent;
  let fixture: ComponentFixture<NavHeaderComponent>;
  let compiled: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list item should be defined', () => {
    component.menu = ['About', 'Images'];
    component.ngAfterViewInit();
    fixture.detectChanges();

    expect(component.listItem).toBeDefined();
    expect(component.listItem.classList.contains('link-active')).toBe(true);
  });

  it('list item should be defined', () => {
    component.menu = ['About', 'Images'];
    fixture.detectChanges();

    const menuEle: HTMLDivElement = compiled.querySelector('#nav-item-0');
    menuEle.click();

    expect(component.listItem.classList.contains('link-active')).toBe(true);
  });

});
