import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None 
})
export class AppComponent implements OnInit {
  @Input() title: string;
  constructor() { }
  ngOnInit() {
  }
}
