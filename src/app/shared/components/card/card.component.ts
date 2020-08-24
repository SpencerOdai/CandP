import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostDetailComponent } from 'src/app/pages/posts/detail/detail.component';
import { IPost } from '../../models/post';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: IPost;
  readAll = false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(data: IPost): void {
    const config: MatDialogConfig<IPost> = {
      data
    };
    this.dialog.open(PostDetailComponent, config);
  }


}
