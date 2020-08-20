import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  openMenu: boolean;

  constructor() { }

  toggleMenu(): void{
    this.openMenu = !this.openMenu;
  }
}
