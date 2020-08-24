import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs/internal/observable/of';
import { LoadingComponent } from 'src/tests';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let compiled: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent, LoadingComponent ],
      imports: [HttpClientModule, MatDialogModule ],
      providers: [
        {provide: MatDialogRef, useValue: {afterClosed: () => {}} }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get posts', fakeAsync(() => {
    spyOn(component['appService'], 'getPosts').and.callFake(() => {
      component['appService'].loading = false;
      return of([]);
    });
    component.ngOnInit();

    tick();
    expect(component.posts$).toBeDefined();
    expect(component.loading).toBeFalse();
  }));

  it('should call addPost method', () => {
    const spy = spyOn(component, 'addPost');
    const addPostBtn: HTMLDivElement = compiled.querySelector('#add-post');

    addPostBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should call open method on dialog class', () => {
    const spy = spyOn(component.dialog, 'open');
    const addPostBtn: HTMLDivElement = compiled.querySelector('#add-post');

    addPostBtn.click();

    expect(spy).toHaveBeenCalledWith(AddPostComponent);
  });

  it('should add new post to existing post list', () => {
    spyOn(component.dialog, 'open').and
    .returnValue({afterClosed: () => of({title: 'title', body: 'body'})} as any);
    const spy = spyOn(component['appService'], 'addPost');

    component.addPost();

    expect(spy).toHaveBeenCalledWith({title: 'title', body: 'body'} as any);
  });

});
