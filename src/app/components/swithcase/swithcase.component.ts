import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swithcase',
  templateUrl: './swithcase.component.html',
  styleUrls: ['./swithcase.component.css']
})
export class SwithcaseComponent implements OnInit {
  public users: any[] = [
    {
       name: 'Frank',
       country: 'Franck'
    },
    {
      name: 'cương',
      country: 'English'
    },
    {
      name: 'John Cean',
      country: 'USA'
    },
    {
      name: 'Join',
      country: 'China'
    },
    {
      name: 'Cương dz',
      country: 'VN'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
