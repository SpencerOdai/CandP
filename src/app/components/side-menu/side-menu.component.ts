import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menu = [
    {
      icon: 'picture',
      text: 'Posts',
      link: '/posts'
    },
    {
      icon: 'people',
      text: 'Users',
      link: '/users'
    },
  ];
  constructor(
    private appService: AppService
  ) { }

  @HostBinding('class.open')
  get openMenu(): boolean{
    return this.appService.openMenu;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void{
    this.appService.toggleMenu();
  }

}
