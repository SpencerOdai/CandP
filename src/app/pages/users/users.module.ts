import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './detail/detail.component';
import { UserProfileItemsComponent } from './user-profile-items/user-profile-items.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, UserDetailComponent, UserProfileItemsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      }
    ])
  ]
})
export class UsersModule { }
