import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();
  user$: Observable<IUser>;

  get openMenu(): boolean{
    return this.appService.openMenu;
  }
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.user$ = this.appService.getUser(7);
    this.user$.subscribe(user => {
      this.appService.currentUser = user;
    });
  }

  toggleMenu(): void {
    this.appService.toggleMenu();
  }

}
