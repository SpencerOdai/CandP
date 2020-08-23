import { Component } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CandP-test';

  constructor(
    private appService: AppService
  ){}

  get openMenu(): boolean{
    return this.appService.openMenu;
  }

}
