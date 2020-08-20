import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();
  get openMenu(): boolean{
    return this.appService.openMenu;
  }
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.appService.toggleMenu();
  }

}
