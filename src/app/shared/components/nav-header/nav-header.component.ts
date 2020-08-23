import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements AfterViewInit {

  @Input() menu: string[];
  @Output() event = new EventEmitter<string>();

  listItem: HTMLElement;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listItem = document.querySelector('#nav-item-0');
      this.listItem.classList.add('link-active');
    }, 0);

  }

  getActive(ev: MouseEvent) {
    this.listItem = ev.target as HTMLElement;
    this.listItem.classList.add('link-active');
  }

}
