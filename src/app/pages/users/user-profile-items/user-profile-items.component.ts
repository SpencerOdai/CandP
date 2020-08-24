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

  calculateAge(dob: any): number {
    let ageDt: Date;
    if (dob){
      const diffMs = Date.now() - new Date(dob).getTime();
      ageDt = new Date(diffMs);
      return Math.abs(ageDt.getUTCFullYear() - 1970);
    } else{
      return 0;
    }


}

}
