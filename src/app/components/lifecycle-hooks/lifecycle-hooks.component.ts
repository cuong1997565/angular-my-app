import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  public title: string = "Lifecycle Hooks";
  public previousTotal:number;
  @Input("tong") total :number;
  constructor() {
    // console.log("constructor : LifecycleHooksComponent");
  }

  ngOnInit() {
    // console.log("ngOnInit : LifecycleHooksComponent");
  }
  //thay đổi giá trị input
  ngOnChanges(SimpleChange : SimpleChanges){
    //  console.log("OnChanges : LifecycleHooksComponent");
     this.previousTotal =SimpleChange.total.previousValue;
    //  console.log(" SimpleChange :", SimpleChange);
  }


  ngOnDestroy(){
    // console.log("OnDestroy : LifecycleHooksComponent");
  }

  ngDoCheck(){
    // console.log("ngDoCheck : LifecycleHooksComponent");

  }

}
