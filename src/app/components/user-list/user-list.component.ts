import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('user') myUser:any[] = [];
  @Input('fullname') myFullName:string = '';
  @Input('address') myAddress:string = '';
  constructor() { }

  ngOnInit() {
  }

}
