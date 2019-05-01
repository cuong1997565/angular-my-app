import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  public arrayNumber: number[] = [1,4,6,3,2,7,10,12,5];
  public sortValue: number = 1;
  public name : string = '';
  constructor() { }

  ngOnInit() {
  }

  onHanderSort(value) : void
  {
    this.sortValue = value;
  }

}
