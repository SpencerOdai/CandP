import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDetailComponent } from 'src/app/pages/users/detail/detail.component';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() data: IUser;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(data: IUser): void{
    const config: MatDialogConfig<IUser> = {
      data
    };
    this.dialog.open(UserDetailComponent, config);

  }

}
