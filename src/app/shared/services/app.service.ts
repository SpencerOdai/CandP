import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IPost } from '../models/post';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  openMenu = false;
  loading = false;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]>{
    this.loading = true;
    let posts: IPost[] = [];
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      switchMap((data: IPost[]) => {
        const users$ = [];
        posts = data;
        data.forEach(post => {
          users$.push(this.getUser(post.userId));
        });
        return combineLatest(users$);
      }),
      map((users: IUser[]) => {
        this.loading = false;
        return posts.map(item => {
          item.images = this.generateRandomImages();
          item.user = users.find(user => user.id === item.userId);
          item.updated = this.randomDate();
          return item;
        });
      }),
      catchError(e => {console.log(e); return []; })
    );
  }

  getUsers(): Observable<IUser[]>{
    this.loading = true;
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).pipe(
      map((users: IUser[]) => {
        this.loading = false;
        return users.map(user => {
        user.picture = `https://i.pravatar.cc/200?img${user.id}`;
        return user;
        });
      }),
      catchError(e => {console.log(e); return []; })
    );
  }

  getUser(id: number): Observable<IUser | any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map((user: IUser) => {
        user.picture = `https://i.pravatar.cc/200?img${user.id}`;
        return user;
      }),
      catchError(e => {console.log(e); return null;})
    );
  }

  randomNumber(max: number): number{
    return Math.floor(Math.random() * max);
  }

  randomDate(): string {
    const end = new Date();
    const start = new Date(end.getTime() - (7 * 24 * 60 * 60 * 1000));
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
  }

  generateRandomImages(): string[]{
    const random = this.randomNumber(6);
    const arr = Array(random).fill('').map((x, i) => i);
    return arr.map(_ => `https://unsplash.it/700/700?random${this.randomNumber(500)}`);
  }

  toggleMenu(): void{
    this.openMenu = !this.openMenu;
  }
}
