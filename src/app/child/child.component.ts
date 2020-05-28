import { Component, OnInit, DoCheck, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck, OnChanges {

  @Input() user;
  @Input() myName: string;
  @Input() tempRef: any;
  constructor() { }

  ngOnInit(): void {
    console.log("On init : " + this.user.name);
    console.log(this.tempRef.myName);
  }

  ngDoCheck() {
    console.log("do check : " + this.user.name);
  }

  ngOnChanges() {
    console.log("on changes");
  }
}
