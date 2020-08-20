import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostsComponent
      }
    ])
  ]
})
export class PostsModule { }
