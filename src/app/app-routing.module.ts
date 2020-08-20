import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomeModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
