import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structutal',
  templateUrl: './structutal.component.html',
  styleUrls: ['./structutal.component.css']
})
export class StructutalComponent implements OnInit {
  public isShow:boolean = true;
  public username:string = "Nguyễn Xuân Cương";
  public isCheck:boolean = false;
  public age:number;
  public names:string[] = ['TP.HCM','Hà Nội','Hà Tây','Vĩnh Long'];
  public products:any[] = [
  ];
  public productServe:any[] = [
    {
      id : "1",
      name : "iphone 6",
      price : 2000
    },
    {
      id : "2",
      name : "iphone 5",
      price : 3000
    },
    {
      id : "3",
      name : "iphone 7",
      price : 4000
    },
    {
      id : "4",
      name : "iphone 8",
      price : 10000
    },
    {
      id : "5",
      name : "iphone 9",
      price : 12000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onToggle(){
     this.isShow = !this.isShow;
  }

  onChange(check){
       this.isCheck = check;
  }

  onLoadServe ()
  {
        this.products = this.productServe;
  }

  myTrackByFunction (index, item)
  {
      return item.id;
  }

}
