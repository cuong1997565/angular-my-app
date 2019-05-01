import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-ng-after-view',
  templateUrl: './ng-after-view.component.html',
  styleUrls: ['./ng-after-view.component.css']
})
export class NgAfterViewComponent implements OnInit,AfterViewInit, AfterViewChecked  {
  public title: string = 'Lifecycle Hook : ngAfterView ngAfterViewChecked';
  public products: any [] = [
        {
            id:   1,
            name: "iphon 6",
            price: 400
        },
        {
          id:   2,
          name: "iphon 8",
          price: 700
        },
        {
          id:   3,
          name: "iphon 9",
          price: 900
        }
  ];

  @ViewChild('arrayProducts') arrayProducts : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit ()
  {
      console.log("ngAfterViewInit : NgAfterViewComponent");
      console.log('init :',this.arrayProducts);
  }

  ngAfterViewChecked ()
  {
      console.log("ngAfterViewChecked : ngAfterViewChecked");
      console.log("checked : ", this.arrayProducts);
  }

  addProduct(value){
      this.products.push(   {
        id:   3,
        name: value,
        price: 900
      });
  }



}
