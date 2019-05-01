import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructutalComponent } from './components/structutal/structutal.component';
import { SwithcaseComponent } from './components/swithcase/swithcase.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ChildComponent } from './components/child/child.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PipeP1Component } from './components/pipe-p1/pipe-p1.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CustomPipeP2Component } from './components/custom-pipe-p2/custom-pipe-p2.component';
import { SortPipe } from './pipes/sort.pipe';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgAfterViewComponent } from './components/ng-after-view/ng-after-view.component';
import { DependecyInjectionComponent } from './components/dependecy-injection/dependecy-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    StructutalComponent,
    SwithcaseComponent,
    AttributeComponent,
    ChildComponent,
    UserListComponent,
    PipeP1Component,
    FormatDataPipe,
    FilterTablePipe,
    CustomPipeComponent,
    SortNumberPipe,
    CapitalizePipe,
    CustomPipeP2Component,
    SortPipe,
    TemplateReferenceVariablesComponent,
    LifecycleHooksComponent,
    NgContentComponent,
    NgAfterViewComponent,
    DependecyInjectionComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
