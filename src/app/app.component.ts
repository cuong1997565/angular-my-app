import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public isShowing : boolean = true;
  public isMarried:boolean = true;
  public age:number = 18;
  public fullname:string = '';
  public address:string = '';
  public a:number;
  public b:number;
  public tong:number = 0;
  public valueString:string = "ng Content";

  public users:any[] = [
    {
      id: 1,
      name: "Nguyễn văn anh",
      address: "TPHCM"
    },
    {
      id: 2,
      name: "Nguyễn ngọc ánh",
      address: "Hà tây"
    },
    {
      id: 3,
      name: "Nguyễn như quỳnh",
      address: "Hà Nội"
    }
  ];

  onGetFullName(value){
      this.fullname = value;
  }

  onGetAddress(value){
      this.address = value;
  }

  isToggle() : void{
      this.isShowing = !this.isShowing;
  }

  total(){
      this.tong = this.a + this.b;
  }

  onClick(value){
     this.valueString = value;
  }
}
