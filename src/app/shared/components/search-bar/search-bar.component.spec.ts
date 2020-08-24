import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';


describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let compiled: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasValue property to be true', fakeAsync(
    () => {
      component.search.next('search');

      tick(1000);

      expect(component.hasValue).toBe(true);
      discardPeriodicTasks();
  }));

  it('hasValue property to be false', fakeAsync(
    () => {
      component.search.next('');

      tick(1000);

      expect(component.hasValue).toBe(false);
      discardPeriodicTasks();
  }));


  it('hasValue property to be true', fakeAsync(
    () => {
      const spy = spyOn(component.event, 'next');
      component.search.next('search');

      tick(1000);

      expect(spy).toHaveBeenCalledWith('search');
      discardPeriodicTasks();
  }));

  it('should clear search', () => {
    const spy = spyOn(component.search, 'next');
    const searchEle: HTMLInputElement = compiled.querySelector('#search-input');
    const searchBtn: HTMLButtonElement = compiled.querySelector('#search-button');
    searchBtn.click();

    expect(spy).toHaveBeenCalledWith('');
    expect(searchEle.value).toEqual('');
  });


});
