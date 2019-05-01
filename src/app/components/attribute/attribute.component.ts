import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  public isSpecial:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  Toggle (){
      this.isSpecial = ! this.isSpecial;
  }

  setClass() {
      return  {
        'pd-10'         : this.isSpecial,
        'cl-red'        : this.isSpecial,
        'border-blue'   : this.isSpecial,
        'border-yellow' : !this.isSpecial
        };
  }

  setStyle() {
      return {
        'border' : this.isSpecial ? 'solid 2px blue' : '',
        'padding.px' : this.isSpecial ? '10' : '',
        'color' : this.isSpecial ? 'red' : ''
      }
  }
}
