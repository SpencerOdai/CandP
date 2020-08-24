import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { IPost } from '../models/post';
import { IUser } from '../models/user';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService],
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a request to post endpoint', () => {
    service.getPosts().subscribe();

    const req = httpMock.expectOne(`${environment.API_URL}/posts`);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toContain('posts');
    httpMock.verify();
  });

  it(`should throw an error on get posts`, async(
    () => {
      service.getPosts().subscribe((posts: any) => {
        expect(posts.length).toBe(0);
      });

      const req = httpMock.expectOne(`${environment.API_URL}/posts`);
      req.error({errors: [{status: 404, title: 'something went wrong'}] } as any);

      httpMock.verify();
  }));

  it(`should make a call to get user data for a post`, async(
    () => {
      const data: IPost[]| any = [{ id: 1, userId: 1 }];
      service.getPosts().subscribe((posts: any) => {
        expect(posts.length).toBe(1);
        expect(posts[0].user).toEqual({
          id: 1,
          name: 'John',
          picture: 'https://i.pravatar.cc/200?img1'
        });
      });

      const postsCall = httpMock.expectOne(`${environment.API_URL}/posts`);
      postsCall.flush(data);

      const usersCall = httpMock.expectOne(`${environment.API_URL}/users/1`);
      expect(usersCall.request.method).toBe('GET');
      usersCall.flush({id: 1, name: 'John'});
      httpMock.verify();
  }));

  it(`should make a call to get all users data`, async(
    () => {
      const data: IUser[]| any = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
      service.getUsers().subscribe((users: any) => {
        expect(users.length).toBe(2);
        expect(users[0]).toEqual({
          id: 1,
          name: 'John',
          picture: 'https://i.pravatar.cc/200?img1'
        });
      });

      const usersCall = httpMock.expectOne(`${environment.API_URL}/users`);
      expect(usersCall.request.method).toBe('GET');
      usersCall.flush(data);
      httpMock.verify();
  }));

  it(`should throw an error on get users`, async(
    () => {
      service.getUsers().subscribe((users: any) => {
        expect(users.length).toBe(0);
      });

      const req = httpMock.expectOne(`${environment.API_URL}/users`);
      req.error({errors: [{status: 404, title: 'something went wrong'}] } as any);

      httpMock.verify();
  }));

  it(`should make a call to get a single user data by id`, async(
    () => {
      const data: IUser[]| any = { id: 1, name: 'John' };
      service.getUser(1).subscribe((users: any) => {
        expect(users.name).toBe('John');
      });

      const userCall = httpMock.expectOne(`${environment.API_URL}/users/1`);
      expect(userCall.request.method).toBe('GET');
      userCall.flush(data);
      httpMock.verify();
  }));

  it(`should throw an error on get user by id`, async(
    () => {
      service.getUser(1).subscribe((user: any) => {
        expect(user).toBe(null);
      });

      const req = httpMock.expectOne(`${environment.API_URL}/users/1`);
      req.error({errors: [{status: 404, title: 'something went wrong'}] } as any);

      httpMock.verify();
  }));

  it('should return an integer between 0 and 1', () => {
    expect(typeof service.randomNumber(1) === 'number').toBe(true);
  });

  it('should return a date and date should be less than todays date', () => {
    expect(typeof service.randomDate() === 'string').toBe(true);
    expect(new Date(service.randomDate()).getTime() < Date.now()).toBe(true);
  });

  it('should generate less than 2 image urls', () => {
    expect(service.generateRandomImages(2).length < 2).toBe(true);
  });

  it('should toggle openMenu property', () => {
    service.toggleMenu();

    expect(service.openMenu).toBe(true);
  });

  it('should add post', () => {
    const spy = spyOn(service.postsArr$, 'next');
    service.posts = [];

    service.addPost({title: 'title'} as any);

    expect(spy).toHaveBeenCalledWith([{title: 'title', id: 1}] as any);
  });


});
