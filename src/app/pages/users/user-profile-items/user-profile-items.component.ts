import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-profile-items',
  templateUrl: './user-profile-items.component.html',
  styleUrls: ['./user-profile-items.component.scss']
})
export class UserProfileItemsComponent implements OnInit {

  @Input() user: IUser;
  age: number;

  constructor() { }

  ngOnInit(): void {
    this.age = this.calculateAge(this.user.dob);
  }

  calculateAge(dob: string = new Date().toISOString()): number {
    const diffMs = Date.now() - new Date(dob).getTime();
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
}

}
