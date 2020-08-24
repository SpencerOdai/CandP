import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-items',
  template: '',
})
export class UserProfileItemsComponent{
  @Input() user;
}
