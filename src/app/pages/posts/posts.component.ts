import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/models/post';
import { AppService } from '../../shared/services/app.service';
import { PostDetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;

  constructor(
    private appService: AppService,
    public dialog: MatDialog
  ) { }

  get loading(): boolean{
    return this.appService.loading;
  }

  ngOnInit(): void {
    this.posts$ = this.appService.getPosts();
  }

  openDialog(data: IPost): void {
    const config: MatDialogConfig<IPost> = {
      data
    };
    this.dialog.open(PostDetailComponent, config);
  }

}
