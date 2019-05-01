import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-p2',
  templateUrl: './custom-pipe-p2.component.html',
  styleUrls: ['./custom-pipe-p2.component.css']
})
export class CustomPipeP2Component implements OnInit {
  public sortBy : string = 'name';
  public sortValue : number = 1;
  public products : any [] = [
      {
         id    : 1,
         name  : 'Iphone 7 plus',
         price : 500
      },
      {
        id    : 2,
        name  : 'Iphone 8 plus',
        price : 1000
      },
      {
        id    : 3,
        name  : 'Iphone 5 plus',
        price : 1500
      },
      {
        id    : 4,
        name  : 'Iphone 9 plus',
        price : 2000
      },
      {
        id    : 5,
        name  : 'Iphone 7 plus',
        price : 2500
      }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSort(value)
  {
      this.sortBy = value;
      this.sortValue = -this.sortValue;
  }

}
