import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: Subject<string> = new Subject<string>();

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  hasValue: boolean;

  constructor() {}

  ngOnInit(): void {
    this.searchSubscription();
  }

  clearSearch(input: { value: string }): void {
    this.search.next('');
    input.value = '';
  }

  searchSubscription(): void {
      this.search
        .pipe(
          map((value) => value),
          debounceTime(600),
          distinctUntilChanged()
        )
        .subscribe((searchPhrase) => {
          if (searchPhrase && searchPhrase.trim() !== '') {
            this.hasValue = true;
          } else {
            this.hasValue = false;
          }

          this.event.next(searchPhrase);
        });
  }
}
