import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {
  public name:string = 'nguyễn xuân cương';
  public age:number = 20;
  public isBool:boolean = true;
  public user : object = {
      name : 'nguyễn văn anh',
      age  : 22,
      isMarried : false
  };
  public img: string = "https://i.ytimg.com/vi/gD4uACwPChA/maxresdefault.jpg";
  public link: string = "https://www.positronx.io/introduction-data-binding-angular-7/";
  public name_link:string  = "google dịch";
  public img_width:number  = 200;
  public img_height:number = 200;
  public isValid:boolean   = true;
  public borderTable:number = 1;
  public widthTable:number = 500;
  public isBorder:boolean = true;
  public isCheck:number = 2;
  public isSepecial :boolean = true;
  public size :number =25;
  constructor() { }

  ngOnInit() {
  }

  showInfo ()
  {
    return `Tên : ${this.user['name']}`;
  }

}
