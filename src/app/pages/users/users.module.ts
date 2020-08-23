import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './detail/detail.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UsersComponent, UserDetailComponent],
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
