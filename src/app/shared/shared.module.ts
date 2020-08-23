import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MomentModule } from 'angular2-moment';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MarkdownPipe, OrderByPipe, SanitizePipe } from './pipes';
import { FilterPipe } from './pipes/filter.pipe';

const COMPONENTS = [
  CardComponent,
  UserCardComponent,
  SearchBarComponent,
  LoadingComponent,
  NavHeaderComponent
];

const PIPES = [
  MarkdownPipe,
  OrderByPipe,
  SanitizePipe,
  FilterPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,

  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MomentModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
