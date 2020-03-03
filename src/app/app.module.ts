import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng2-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppHighlightDirective } from './app-highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormModuleComponent } from './form-module/form-module.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgonchangeDirective } from './ngonchange.directive';
import { NgonchangePropBindComponent } from './ngonchange-prop-bind/ngonchange-prop-bind.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DocheckComponent } from './docheck/docheck.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    FormModuleComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssueListComponent,
    NgonchangeDirective,
    NgonchangePropBindComponent,
    HeaderComponent,
    FooterComponent,
    DocheckComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
	  SelectModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppModule { }
