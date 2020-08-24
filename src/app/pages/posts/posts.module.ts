import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostDetailComponent } from './detail/detail.component';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent, AddPostComponent],
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
