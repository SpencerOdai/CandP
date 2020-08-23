import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostsComponent
      }
    ])
  ]
})
export class PostsModule { }
