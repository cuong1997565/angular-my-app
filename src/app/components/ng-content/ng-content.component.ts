import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked ,
  ContentChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  public title:string = "ng Content";
  @ContentChild('value') value :ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit ()
  {
      // console.log("value :", this.value);
      // console.log("ngAfterContentInit : NgContentComponent");
  }

  ngAfterContentChecked ()
  {
    //  console.log("ngAfterContentChecked : NgContentComponent");
  }
}
