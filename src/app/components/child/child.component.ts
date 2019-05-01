import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried:boolean = false;
  @Input('age') myAge:number = 18;
  private _name:string;
  public txtFullName:string;
  public txtAddress:string;
  @Output('txtFullName') onHanderFullName = new EventEmitter<string>();
  @Output('txtAddress') onHanderAdress= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
    set name(name : string){
        this._name = name;
    }

    get name(){
      return this._name;
    }

    onSubmitForm(){
        this.onHanderFullName.emit(this.txtFullName);
        this.onHanderAdress.emit(this.txtAddress);
    }

}
