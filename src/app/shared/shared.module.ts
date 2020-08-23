import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MarkdownPipe, OrderByPipe, SanitizePipe } from './pipes';
import { FilterPipe } from './pipes/filter.pipe';

const COMPONENTS = [
  CardComponent,
  UserCardComponent,
  SearchBarComponent,
  LoadingComponent
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
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }