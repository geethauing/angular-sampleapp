import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchange-prop-bind',
  templateUrl: './ngonchange-prop-bind.component.html',
  styleUrls: ['./ngonchange-prop-bind.component.css']
})
export class NgonchangePropBindComponent implements OnInit, OnChanges {
@Input() myPropData: string;
propchanges: any;

ngOnChanges(changes:SimpleChanges) {
    this.propchanges = changes;
}
  constructor() { }

  ngOnInit() {
  }

}
