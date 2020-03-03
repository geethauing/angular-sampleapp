import { Component, ChangeDetectionStrategy, DoCheck, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocheckComponent implements DoCheck, AfterViewInit {
  
  ngAfterViewInit() {
    console.log("---ngAfterViewInit() Demo---");
  }

  public count: number = 1;
  @Input() person: Person;

  public ngDoCheck(): void {
    console.log('HelloComponent: Change Detection count = ' + (this.count++));
  }
}
export interface Person {
  name: string;
  age: number;
}