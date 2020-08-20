import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  // @Input() openMenu = false;
  menu = [
    {
      icon: 'picture',
      text: 'Posts',
      link: '/posts'
    },
    {
      icon: 'users',
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
