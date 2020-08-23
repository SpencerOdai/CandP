import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  currentImageIndex = 0;
  messages: any[] = [];
  message: string;

  constructor(
    public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPost
  ) { }

  ngOnInit(): void {
  }

  pushMessage(ev): void {
    this.messages.push({date: Date.now(), text: ev, image: `https://i.pravatar.cc/200`});
    this.message = '';
  }

  prev(): void{
    if (this.currentImageIndex !== 0){
      this.currentImageIndex --;
    }
  }
  next(): void{
    if (this.currentImageIndex !== this.data.images.length){
      this.currentImageIndex ++;
    }
  }
}
