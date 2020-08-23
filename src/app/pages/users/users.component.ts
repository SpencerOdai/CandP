import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { IUser } from 'src/app/shared/models/user';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  filterList: string[];
  filterVal = '';

  constructor(
    private appService: AppService
  ) { }

  get loading(): boolean{
    return this.appService.loading;
  }

  ngOnInit(): void {
    this.users$ = this.appService.getUsers();
    this.users$.pipe(map(_ => {
      return _.map(user => user.name.charAt(0));
    })).subscribe(_ =>
      this.filterList = Array.from(new Set(_.sort((a, b) => a > b ? 1 : -1)))
    );
  }

  searchUser(val: string): void{
    this.filterVal = val;
  }

}
