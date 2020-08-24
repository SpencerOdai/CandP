import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AppService } from '../../shared/services/app.service';
import { AddPostComponent } from './add-post/add-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  get posts$(): Observable<any>{
    return this.appService.postsArr$;
  }

  constructor(
    private appService: AppService,
    public dialog: MatDialog
  ) { }

  get loading(): boolean{
    return this.appService.loading;
  }

  ngOnInit(): void {
    this.appService.getPosts().subscribe();
  }

  addPost(): void{
    const dialogRef = this.dialog.open(AddPostComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data){
        this.appService.addPost(data);
      }
    });
  }


}
