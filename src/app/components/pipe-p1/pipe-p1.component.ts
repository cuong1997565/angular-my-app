import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-p1',
  templateUrl: './pipe-p1.component.html',
  styleUrls: ['./pipe-p1.component.css']
})
export class PipeP1Component implements OnInit {
  public content:string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essentially unchanged. It was popularised in the 1960s with the release of
     Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
     software like Aldus PageMaker including versions of Lorem Ipsum.
  `;
  public name :   string = 'lương đình của';
  public title :  string = 'Học Angular 5';
  public amount : number = 35.142567;
  public result : number = 0.8516;
  public names : string[] =  ["1","2","3","4","5","6"];
  public total : number = 75.8;
  public today : Date = new Date();
  public product : any = [
    {
      id   : 1,
      name : "samsung glaxy s7",
      price: 15,
      status: true
    },
    {
      id   : 2,
      name : "samsung note 8",
      price: 30,
      status: false
    },
    {
      id   : 3,
      name : "samsung s9",
      price: 45,
      status: true
    },
    {
      id   : 4,
      name : "samsung s9",
      price: 45,
      status: true
    },
    {
      id   : 10,
      name : "samsung s9",
      price: 45,
      status: true
    }
  ];
  public idFilter: string;
  public nameFilter: string;
  public statusFilter:string;
  constructor() { }

  ngOnInit() {
  }

}
