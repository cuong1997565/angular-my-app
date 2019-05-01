import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {
  public txtName:string = '';
  @ViewChild('txtName') name : ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onGetData(name) :void{
    console.log(name);
  }

  onGetDataComp():void{
      console.log(this.name.nativeElement.value);
  }
}
