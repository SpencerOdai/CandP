import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements AfterViewInit {

  @Input() menu: string[];
  @Output() event = new EventEmitter<string>();

  listItem: HTMLElement;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.listItem = document.querySelector('#nav-item-0');
    if (this.listItem){
      this.listItem.classList.add('link-active');
    }
    this.cdRef.detectChanges();

  }

  getActive(ev: MouseEvent) {
    this.listItem = ev.target as HTMLElement;
    this.listItem.classList.add('link-active');
  }

}
