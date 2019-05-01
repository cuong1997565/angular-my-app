import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title:string = "Event Biding";
  public count:number = 0;
  public username:string = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe(event){
      console.log(event.target.innerText);
  }

  onDBClickMe(event)
  {
    console.log(event.target.innerText);
  }

  onInc(){
      this.count++;
  }

  onKeyUp(event)
  {
    this.username = event.target.value;
  }

}
