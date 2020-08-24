import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IPost, Post } from 'src/app/shared/models/post';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: IPost = new Post();
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<AddPostComponent>,
  ) { }

  ngOnInit(): void {
  }

  add(): void{
    this.post.userId = this.appService.currentUser.id;
    this.post.user = this.appService.currentUser;
    this.post.updated = new Date().toISOString();
    this.post.images = this.appService.generateRandomImages(6);
    this.dialogRef.close({...this.post});
  }

}
