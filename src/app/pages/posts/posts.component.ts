import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;

  constructor(
    private appService: AppService
  ) { }

  get loading(): boolean{
    return this.appService.loading;
  }

  ngOnInit(): void {
    this.posts$ = this.appService.getPosts();
  }

}
